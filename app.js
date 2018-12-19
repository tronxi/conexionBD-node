const express=require('express');
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

buscar = require('./node/buscar.js');

app.use(express.static(__dirname));

app.get('/buscar', (req, res) => {
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
            res.send(valor);
        }
    });
  })

  app.post('/conexionBD-node/borrardatos',(req, res) =>{
    let id = req.body.id;
    buscar.delete(function(error){
        if(error)
        {
            throw error;
        }
        else
        {
            res.end();
        }
    }, id);
    });
const server=app.listen(8888, () => {
  console.log('Servidor web iniciado');
});