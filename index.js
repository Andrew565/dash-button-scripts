var applescript = require('applescript');
var dash_button = require('node-dash-button');
var dash = dash_button("84:d6:d0:29:46:4a");
dash.on("detected", function() {
	console.log('ON button pushed');
	var script = './playpause.scpt';
	applescript.execFile(script);
});