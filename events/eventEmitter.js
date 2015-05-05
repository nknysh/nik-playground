'use strict';

watcher = new FilesizeWatcher('C:/tmp/fileToWatch.txt');

watcher.on('error', function(err) {
		console.log('Error watching file: ', err);
	});

watcher.on('grew', function(gain) {
		console.log('File grew by ', gain, ' bytes');
	});

watcher.on('shrank', function(loss) {
		console.log('File shrank by ', loss, ' bytes');
	});

watcher.stop();