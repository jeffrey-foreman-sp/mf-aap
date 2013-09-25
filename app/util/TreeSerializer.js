Ext.define('Aap.util.TreeSerializer', {
  extend: Object,

  constructor: function(tree, config) {
    this.tree = tree;
  },

  toString: function() {
    return this.nodeToString(this.tree.getRootNode());
  },

  nodeToString: function(node) {

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
