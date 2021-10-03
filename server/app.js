const http = require('http');
var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3001

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "delicious"
});


function read_to_dos() {
return new Promise(function(resolve, reject){
	con.query("SELECT Name, Description FROM to_do.to_dos", (err, rows) => {
  	if (err) throw err;
	resolve(rows);
});
});
}

function delete_to_do(name) {
return new Promise(function(resolve, reject){
	con.query("DELETE FROM to_do.to_dos WHERE name='" + name + "';", (err, rows) => {
        if (err) throw err;
        resolve(rows);
});
});
}


function add_to_do(name, description, priority=null, date_entered=null, date_finished=null) {
	return new Promise(function(resolve, reject){
		let str = "INSERT INTO to_do.to_dos VALUES ('" + name + "', '" + description + "', " + "" + priority + ", ";
		str = str + "" + date_entered + ", " + "" + date_finished + "" + ");" 
	        //console.log(str);
		con.query(str, (err, rows) => {
        	if (err) throw err;
		resolve(rows);
		});
	});
}


app.get('/read_to_dos', (req, res) => {
	try {
		var promise = read_to_dos();
		promise.then(function(rows) {
			res.send(JSON.stringify(rows));
		})
	}
	catch (err) { 
		console.log("Unable to read to_do entries");
	}
})


app.get('/add_to_dos', (req, res) => {
	try { 
		add_to_do("A new to do entry", "something to do");
	}
	catch (err) { 
		console.log("Unable to add to_do entry with the name " + req.params.name);
	}
})


app.get('/remove_to_dos/:name', (req, res) => {
	try {
		delete_to_do(req.params.name);
	}
	catch (err) { 
		console.log("Unable to delete to_do with the name " + req.params.name);
	}
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
