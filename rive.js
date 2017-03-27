var RiveScript = require("rivescript");
var bot = new RiveScript();
 
// Load a directory full of RiveScript documents (.rive files). This is for 
// Node.JS only: it doesn't work on the web! 
//bot.loadDirectory("brain", loading_done, loading_error);
 
// Load an individual file. 
//bot.loadFile("brain/testsuite.rive", loading_done, loading_error);
 
// Load a list of files all at once (the best alternative to loadDirectory 
// for the web!) 
bot.loadFile("rs-standard.rive", loading_done, loading_error);
 
// All file loading operations are asynchronous, so you need handlers 
// to catch when they've finished. If you use loadDirectory (or loadFile 
// with multiple file names), the success function is called only when ALL 
// the files have finished loading. 
function loading_done (batch_num) {
	console.log("Batch #" + batch_num + " has finished loading!");
 
	// Now the replies must be sorted! 
	bot.sortReplies();
 
	// And now we're free to get a reply from the brain! 
	var reply = bot.reply("local-user", "Hello, bot!");
	console.log("The bot says: " + reply);
}
 
// It's good to catch errors too! 
function loading_error (batch_num, error) {
	console.log("Error when loading files: " + error);
}