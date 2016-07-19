var applescript = require('applescript'); // Node -> Applescript Bridge
var dash_button = require('node-dash-button'); // Dash Button detection library

/*
	Replace the MAC addresses here with your own.
*/
var buttons = [
	"84:d6:d0:29:46:4a", // ON Button
	"74:c2:46:4f:bf:88" // Quest Button
];

var dash = dash_button(buttons, null, 10000); // Initializes the listener with what addresses to listen to

dash.on("detected", function(dash_id) {
	if (dash_id === buttons[0]) {
		console.log('ON button pushed');
		var script = './playpause.scpt'; // Activates BeardedSpice.app's custom play/pause hotkey
		applescript.execFile(script);
	} else if (dash_id === buttons[1]) {
		console.log('Quest Button pushed');
		var script = './activatesiri.scpt'; // Activates Siri with the custom hotkey cmd+opt+k
		applescript.execFile(script);
	}
});