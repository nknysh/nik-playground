var querystring = require("querystring");
var string = require("string");
var fs = require("fs");
var formidable = require("formidable");
var util = require("util");

function start(response, postData) {
	console.log("Request handler Start was called.");

var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/submit" method="post">'+
'<input type="text" name="user" /><br />'+
'<textarea name="text" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'<br /><br />'+
'<form action="/upload" enctype="multipart/form-data" '+
'method="post">'+
'<input type="file" name="upload">'+
'<input type="submit" value="Upload file" />'+
'</form>'+
'</body>'+
'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, request) {
	console.log("Request handler Upload was called.");
	
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");
		
		fs.rename(files.upload.path, "C:/tmp/test.png", function (error) {
			if (error) {
				// fs.unlink("C:/tmp/test.png");
				fs.rename(files.upload.path, "C:/tmp/test.png");
			}
		});

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("received image:<br/>");
	response.write("<img src='/show' />");
	response.end();
	});
}

function submit(response, request) {
	console.log("Request handler Submit was called.");
	
	var form = new formidable.IncomingForm();

	form.parse(request, function(error, fields, files) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(util.inspect(fields) + '<br />');
		response.write(greet(fields.user) + '<br />');
		response.write('<p>You submitted the following:<br />' + fields.text + '</p>');
		response.write('<p>isValid = ' + isValid(fields.text) + '</p>');
		response.write('<p>isLong = ' + isLong(fields.text) + '</p>');
		response.end();
	});
}

function show(response) {
	console.log("Request handler Show was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("C:/tmp/test.png").pipe(response);
}

function isValid(myString) {
	if (string(myString).contains('valid')) {
		return true;
	} else {
		return false;
	};
};

function isLong(myString) {
	if (string(myString).length >= 20) {
		return true;
	} else {
		return false;
	};
};

function greet(name) {
	if ((name === undefined) || (name.length === 0)) {
		name = 'dude';
	}
	return 'Hello ' + name + '!';
};

exports.start = start;
exports.upload = upload;
exports.submit = submit;
exports.show = show;
exports.isValid = isValid;
exports.isLong = isLong;
exports.greet = greet;