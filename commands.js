var fs = require('fs');

var pwd = function(fileName) {
	process.stdout.write(process.cwd());
	process.stdout.write("\nprompt > ");
}

var date = function(fileName) {
	process.stdout.write(Date());
	process.stdout.write("\nprompt > ");
}	

var ls = function(fileName) {
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  files.forEach(function(file) {
	    process.stdout.write(file.toString() + "\n");
	  })
	  process.stdout.write("prompt > ");
	});
}

var echo = function(fileName) {
	const output = fileName
	.split(' ')
	.map(function (arg) {
		return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
	})
	.join(' ');
	process.stdout.write(output);
}

var cat = function(fileName) {
	fs.readFile(pwd(fileName).toString(), (err, data) => {
  		if (err) throw err;
  			console.log(data);
		});
}

// var head = function(fileName) {
// 	fs.readFile(pwd(fileName), (err, data) => {
//   		if (err) throw err;
//   			data = data.split('\n').splice(0, 10).join('\n');
//   			console.log(data);
// 		});
// }

// var tail = function(fileName) {
// 	fs.readFile(pwd(fileName), (err, data) => {
//   		if (err) throw err;
//   			console.log(data);
// 		});
// }

module.exports = {
	pwd, date, ls, echo, cat
};