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
    
    $(function(){
        $('#subForm').submit(function (e) {
            e.preventDefault();
            $.getJSON(this.action + "?callback=?", $(this).serialize(), function (data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message.replace('subscribe to this list', 'submit your RSVP'));
                } else { // 200
                    alert("Thanks, we've just sent you an email where you'll need to confirm your RSVP by clicking the link in the email.");
                }
            });
        });
    });

});

require(['map']);