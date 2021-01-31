module.exports = function reverse (n) {
		let str = '';

		if (n < 0) {
			n = Number(String(n).replace('-', ''));
		}

  		for (let i = String(n).length - 1; i >= 0; i--) {
  			str += String(n)[i];
  		};
  		
  		return Number(str)
	}
