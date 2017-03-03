(function(){
  
  function jcookie() {
    this.getCookies();
  }

  jcookie.prototype.constructor = jcookie;

  jcookie.prototype.getCookies = function() {
    var cookie = {};
    var cookies = document.cookie.split(';');

    for(var i=0,c;i<cookies.length;i++) {
      c = cookies[i].split('=');
      cookie[c[0].trim()] = unescape(c[1]);
    }
  
    this.cookie = cookie;
    return cookie;
  }

  jcookie.prototype.set = function Set(name,value,days,domain,path) {
    var cookie = [];
    if(typeof name === 'undefined') {
      return new Error('Invalid or missing cookie name');
    }
  
    value = typeof value !== 'undefined'? value : true;
  
    cookie.push(name+'='+value);
  
    if(typeof domain !== 'undefined') {
      cookie.push('domain='+domain);
    }
  
    if(typeof days !== 'undefined') {
      var expires = new Date();
      expires.setTime(expires.getTime()+(days*24*60*60*1000));
      cookie.push('expires='+expires.toGMTString());
    }
  
    cookie.push('path='+(path||'/'));
  
    document.cookie = cookie.join(';');
    return typeof this.get(name) !== 'undefined';
  }

  jcookie.prototype.get = function Get(name) {
    return this.getCookies()[name];
  }

  jcookie.prototype.delete = function Delete(name,domain,path) {
    this.set(name,'',-1,domain,path);
    this.getCookies();
  }

  window.jcookie = new jcookie();
})();