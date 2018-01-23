var commands = require("./commands.js");

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
	var cmd = data.toString().trim();
	cmd = cmd.split(' ');
	var first = cmd[0];
	var remaining = cmd.slice(1).join(' ');
	if (first === 'pwd')  commands.pwd(remaining); 
	if (first === 'date') commands.date(remaining);
	if (first === 'ls')   commands.ls(remaining); 
	if (first === 'echo') commands.echo(remaining);
	if (first === 'cat')  commands.cat(remaining); 
	// } else if (first === 'head') {
	// 	commands.head(remaining);
	// } else if (first === 'tail') {
	// 	commands.tail(remaining);
	// }
  //process.stdout.write('\nprompt > ');
});
