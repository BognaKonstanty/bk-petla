
function rysujChoinkę(n) {
	for (i = 1; i <= n; i++ ) {
		var star = '';
		for (j = 1; j <= i*2-1; j++) {	  
     		var star = star + '*';
      	}
    	console.log(star)
  	}
}
rysujChoinkę(5);

