Ext.define('Aap.view.mainbody.Tree' ,{
    extend: 'Ext.tree.Panel',
	xtype: 'tree',
    width: 150,
    height: 150,
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true
                    }
                ]
            }
        ]
    }
});
