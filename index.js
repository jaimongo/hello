const express= require('express');
const app = express();
const pokedex = require('./pokedex.json');


app.get("/", (req, res) =>{
    console.log(req);
    res.send("Busqueda pokemon");
});

app.get("/pokedex", (req, res) =>{
	res.json(pokedex.pokemon);

});

app.get("/pokedex/id/:id", (req, res) =>{
	res.json(pokedex.pokemon[req.params.id-1]);

});

app.get("/pokedex/name/:nombre", (req, res) =>{
	for (var i = 0; i >= 151; i++) {
		if(pokedex.pokemon[i].name==[req.params.nombre]){
			res.json(pokedex.pokemon[i]);
		}
		if(i==150){
			console.log("nadie se llama asi");
		}
	}
	

});

app.get("/pokedex/rand", (req, res) =>{
	res.json(pokedex.pokemon[Math.floor(Math.random() * 150)]);

});

app.get("/pokedex/image/:id", (req, res) =>{
	const imga=res.json(pokedex.pokemon[req.params.id-1].img);
});

app.listen(3000, () =>{
    console.log("Mamalon tu tranqui");
});