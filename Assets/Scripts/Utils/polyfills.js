define(function(){
	if (!Object.create) {
	    Object.create = function (o) {
			function F(){}
	        F.prototype = o;
	        return new F();
	    };
	}
	
	// Extend the native Maths object so it can generate a random id
	Math.guid = function(){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		}).toUpperCase();      
	};
});