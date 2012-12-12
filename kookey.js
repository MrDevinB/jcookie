/*      name :    String
 *      val  :    String,number,boolean
 *      days :    number optional
 *      
 *      Usage
 *      kookey.func(variables);
 *  
 */

var kookey = {
    set: function(name,val,days) {
        var D = new Date(),
            exp='';
        if(days){
            D.setTime(D.getTime()+(days*24*60*60*1000));
            exp = "; expires="+D.toGMTString();
        }
        document.cookie = name+"="+val+exp+"; path=/";
    },
    get: function(name) {
        var N=name+"=",
            ca=document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
    		var c=ca[i];
    		while (c.charAt(0)==' ') c = c.substring(1,c.length);
    		if (c.indexOf(N) == 0) return c.substring(N.length,c.length);
    	}
    	return null;
    },
    eat: function(name) {
        this.set(name,"",-1);
    }
}
