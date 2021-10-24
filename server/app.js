const http = require('http');
var mysql = require('mysql');
const express = require('express')
var cors = require('cors')
const app = express()
const ip_address = "localhost";
const port = 3001

app.use(cors()) // Enable all cors

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});


function read_to_dos() {
return new Promise(function(resolve, reject){
	con.query("SELECT Name, Description, Priority FROM to_do.to_dos", (err, rows) => {
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

function delete_all_to_dos() { 
return new Promise(function(resolve, reject){
        con.query("DELETE FROM to_do.to_dos;", (err, rows) => {
        if (err) throw err;
        resolve(rows);
});
});
}


function add_to_do(name, description="", priority=null, date_entered="DEFAULT", date_finished=null) {
	return new Promise(function(resolve, reject){
		let str = "INSERT INTO to_do.to_dos VALUES ('" + name + "', '" + description + "', " + "" + priority + ", ";
		str = str + "" + date_entered + ", " + "" + date_finished + "" + ");" 
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


app.get('/add_to_dos/', (req, res) => {
	try { 
		add_to_do(req.query.name, req.query.description);
		console.log("Added an item named " + req.query.name)
	}
	catch (err) { 
		console.log("Unable to add to_do entry with the name " + req.query.name);
		res.sendStatus(500);
	}
	res.sendStatus(200);
})


app.get('/remove_to_dos/:name', (req, res) => {
	try {
		delete_to_do(req.params.name);
		console.log("Removing an item named " + req.params.name)		
	}
	catch (err) { 
		console.log("Unable to delete to_do with the name " + req.params.name);
	}
})


app.get('/remove_all_to_dos', (req, res) => {
        try {
                delete_all_to_dos();
                console.log("Removing all the items from the to do list")
        }
        catch (err) { 
                console.log("Unable to delete all the to do items");
        	res.sendStatus(500);
	}
	res.sendStatus(200);
})


app.listen(port, () => {
  console.log(`Example app listening at http://${ip_address}:${port}`)
})
