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
    var valor;
    bd.query("delete from tablaPrueba where id = " + id, function(error,filas){

        if (error) {            
            console.log('error al borrar');
            return;
        }
        cb(error);

  });
}

exports.insertar = function(cb, id)
{
    var qr = "insert into tablaPrueba (nombre) values ('";
    qr += id;
    qr += "')";
    bd.query(qr, function(error){

        if (error) {            
            console.log('error al insertar');
            return;
        }
        cb(error);

  });
}