/**
 * @File-name : SafeBrowse.js
 * @author : Gunaseelan.T
 * @File-Description : QR-Code validation using Google SafeBrowsing API.
 **/

/*Import header files*/
var get = require('simple-get')
var express = require('express');
var app = express();

/*Lookup for particular URI*/
app.get('/check', function(req, res){
	// String with app Key
  	var query = "https://sb-ssl.google.com/safebrowsing/api/lookup?client=****&key=***&appver=***&pver=***&url=";
	// String with the request URL
	var query1 = req.query.url;
	// Concatinated string
	var query2 = query+query1;
	// Public URL validation implementation
	get.concat(query2, function (err, resp, data) {
		// error callback
		if (err) {
			console.log("Error: ",err);
		}
		// Print the URL
		console.log("URL verified: ",query1);
		// Print the data callback
		console.log("Public URL validation result: ",data.toString('utf8'));
		// if condition to check the response
		if(data.toString('utf8') == "malware"){
			// Terminal dispay
			console.log("It's a Malware website ! \n")
			// response to the client as "Malware"
			res.send("Malware");
		}else{
			// Terminal dispay
			console.log("It's a Safe website ! \n")
			// response to the client as "Safe"
	  		res.send("Safe");
	  	}
	})
});
// Server listening at the port 4545
app.listen(4545);
// Terminal dispay
console.log("\nServer running at port 4545. \n");