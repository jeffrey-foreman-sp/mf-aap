var iTreeStore, iTree;

Ext.define('Person', {
    extend: 'Ext.data.Model',
    fields: ['name']
});

Ext.define('TreeSerializer', {
    extend: Object,
    constructor: function (tree, config) {
        this.tree = tree;

    },
    toString: function () {
        return this.nodeToString(this.tree.getRootNode());
    },
    nodeToString: function (node) {

        var result = Ext.data.writer.Json.prototype.getRecordData(node),
            childNodes = node.childNodes,
            len = childNodes.length,
            children, i;

        if (len > 0) {
            children = [];
            for (i = 0; i < len; i++) {
                children.push(this.nodeToString(childNodes[i]));
            }
            result.children = children;
        }
        return result;
    }
});


var iJson = {
    people: [{
        name: "Bill",
        children: [{
            name: "Kate",
            leaf: true
        }, {
            name: "John",
            leaf: true
        }]
    }, {
        name: "Norman",
        expanded: true,
        children: [{
            name: "Mike",
            leaf: true
        }, {
            name: "Harry",
            leaf: true
        }]
    }]
};

Ext.define('MyVariJsonReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.varijson',

    buildExtractors: function () {
        var me = this;

        me.callParent(arguments);

        me.getRoot = function (aObj) {

            // Special cases
            switch (aObj.name) {
            case 'Bill':
                return aObj['children'];
            case 'Norman':
                return aObj['sons'];
            }
            // Default root is `people`
            return aObj['people'];
        };
    }
});

Ext.onReady(function () {

    iTreeStore = Ext.create('Ext.data.TreeStore', {
        autoload: true,
        model: 'Person',
        field: ['name'],

        proxy: {
            type: 'memory',
            data: iJson,
            reader: 'varijson'
        }

    });

    iTree = Ext.create('Ext.tree.Panel', {
        id: 'tree',
        store: iTreeStore,

        displayField: 'name',

        width: 250,
        height: 150,
        rootVisible: false,
        renderTo: 'tree'
    });

}); //Ext.ready

function treeToJSON() {

    var s = new TreeSerializer(iTreeStore)
    var serialized = JSON.stringify(s.toString());

    document.getElementById('output').innerHTML = serialized;

}