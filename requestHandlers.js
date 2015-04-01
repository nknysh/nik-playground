var querystring = require("querystring");
var string = require("string");

function start(response, postData) {
	console.log("Request handler Start was called.");

var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, postData) {
	console.log("Request handler Upload was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	var text = querystring.parse(postData).text;

	response.write("WOW! You've sent the text: " + text + ", size = " + string(text).length + "<br />");
	response.write("isValid = " + string(isValid(text)).toString());
	response.end();
}

function isValid(myString) {
	if (string(myString).length <= 10) {
		return true;
	} else {
		return false;
	};
};


exports.start = start;
exports.upload = upload;
exports.isValid = isValid;