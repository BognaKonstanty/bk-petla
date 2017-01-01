
function rysujChoinkę(n) {
	for (i = 1; i <= n; i++ ) {
		var star = '';
		for (j = 1; j <= i*2-1; j++) {	  
     		var star = star + '*';
      		var c = '';
      		for (k = i-1; k <= (n*1)-2; k++) {
        		var c = c +' ';
      		}
    	}
    	console.log(c + star)
  	}
}
rysujChoinkę(2)


