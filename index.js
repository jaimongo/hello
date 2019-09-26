const express= require('express');
const app = express();
var datos=[];

var personas={
	nombre:null,
	edad:null,
}




app.get("/", (req, res) =>{
    console.log(req);
    res.send("Hola mundo!");
});


app.get("/:id/:nombre/:edad", (req, res) =>{
	if(req.url!="/favicon.ico"){
    var dato = req.params.id;
    console.log(dato);
    datos.push(dato);
    console.log(datos);	


    var dato1 = req.params.nombre;
    var dato2 = req.params.edad;

    console.log(dato1);
    console.log(dato2);

    personas.nombre=dato1;
    personas.edad=dato2;

    res.send();

    console.log(personas);	
	}

});


app.listen(3000, () =>{
    console.log("Server is running...");
});