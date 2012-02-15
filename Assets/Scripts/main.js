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

require(['jquery'], function($){
    
    $(function () {
        $('#subForm').submit(function (e) {
            e.preventDefault();
            $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function (data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
        });
    });

});

require(['map']);