
const express = require('express');
const app = express();

//////////manejar peticiones
app.get("/", (req, res) =>{
	res.send("hola mundo");
});

/////////run server
app.listen(3000, ()=>{
	console.log("server is running....");
});