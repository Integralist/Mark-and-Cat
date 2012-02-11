require.config({ 
	catchError: {
		define: true
	},
	paths: {
		async: 'Plugins/async',
		jquery: 'Utils/Libraries/jquery',
		tpl: 'Plugins/tpl'
	}
});

require(['errorhandler'], function(handler) {
	require.onError = handler;
});

require(['map']);