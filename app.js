const express=require('express');
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

buscar = require('./node/buscar.js');

app.use(express.static(__dirname));

var cors = require('cors')
 
app.use(cors())

app.get('//buscar', (req, res) => {

    buscar.select(function(error, resultado)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            let valor = "";
            for(let i = 0; i < resultado.length; i++)
            {
                valor += " " + resultado[i].id + " " + resultado[i].nombre + "<br>";
            }
            res.send(JSON.stringify(resultado));
        }
    });
  })

  app.post('//borrardatos',(req, res) =>{
    let id = req.body.id;
    buscar.delete(function(error){
        if(error)
        {
            throw error;
        }
        else
        {
            res.redirect('/conexionBD-node/index.html');
        }
    }, id);
    });

    app.post('//insertarDatos',(req, res) =>{
        let id = req.body.nombre;
        buscar.insertar(function(error){
            if(error)
            {
                throw error;
            }
            else
            {
                res.redirect('/conexionBD-node/index.html');
            }
        }, id);
        });
        
const server=app.listen(8888, () => {
  console.log('Servidor web iniciado');
});