const http = require('http');
var mysql = require('mysql');
const express = require('express')
var cors = require('cors')
const app = express()
var fs = require('fs');

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
	con.query("SELECT Name, Description, Priority, Date_Entered, Date_Finished FROM to_do.to_dos", (err, rows) => {
  	if (err) throw err;
	resolve(rows);
});
});
}

function delete_to_do(name) {
return new Promise(function(resolve, reject){
	console.log(name);
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


function add_to_do(name, description="", priority=null, date_entered="DEFAULT", date_finished=null, user="PeterJochem") {
	return new Promise(function(resolve, reject){
		let str = "INSERT INTO to_do.to_dos VALUES ('" + name + "', '" + description + "', " + "" + priority + ", ";
		str = str + "" + date_entered + ", " + "" + date_finished + ", '" + user + "');" 
		console.log(str)
		con.query(str, (err, rows) => {
        	if (err) throw err;
		resolve(rows);
		});
	});
}

function update_to_do(name, description="", priority=null, date_entered="DEFAULT", date_finished=null, user="PeterJochem") { 
	return delete_to_do(name).then(() => {add_to_do(name, description, priority, date_entered, date_finished, user)});
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


app.get('/get_user_avatar/:username', (req, res) => {
        try {
                res.sendFile("/home/peter/Javascript/ToDo/ToDo/to_do/my-app/public/" + req.params.username + ".jpg");
		console.log("Succesfully got avatar for user named " + req.params.username)
        }
        catch (err) {
                console.log("Unable to get the avatar for the user named " + req.params.username);
                console.log(err);
		res.sendStatus(500);
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

app.get('/update_to_do/', (req, res) => {
	try { 
		update_to_do(req.query.name, req.query.description);
		//add_to_do(req.query.name, req.query.description);
		console.log("Updated an item named " + req.query.name)
	}
	catch (err) { 
		console.log("Unable to update to_do entry with the name " + req.query.name);
		res.sendStatus(500);
	}
	res.sendStatus(200);
})




app.get('/remove_to_dos', (req, res) => {
	try {
		delete_to_do(req.query.name);
		console.log("Removing an item named " + req.query.name)		
	}
	catch (err) { 
		console.log("Unable to delete to_do with the name " + req.query.name);
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
