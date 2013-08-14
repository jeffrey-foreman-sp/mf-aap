Ext.define('HR.view.company.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'companylist',
	store: 'Companies',
	columns: [{
		xtype: 'gridcolumn',
		dataIndex: 'id',
		text: 'Id',
		flex: 1
	},{
		xtype: 'gridcolumn',
		dataIndex: 'name',
		text: 'Company Name',
		flex: 1
	}]
});
