var playSong = 	new Function(
					"line1",
					"line2",
					"line3",
					"return line1+' '+line2+' '+line3"
				);
console.log(playSong("tamma", "tamma", "looge"));