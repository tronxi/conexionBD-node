var bd=require('./bd');

exports.select = function(cb)
{
    var valor;
    bd.query('select id, nombre from tablaPrueba', function(error,filas){

        if (error) {            
            console.log('error en el listado');
            return;
        }
        cb(error, filas);

  });
}

exports.delete = function(cb, id)
{
    console.log("entro en borrar");
    var valor;
    bd.query("delete from tablaPrueba where id = " + id, function(error,filas){

        if (error) {            
            console.log('error en el listado');
            return;
        }
        cb(error);

  });
}