// Dependencies
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection('mysql://root:123456@127.0.0.1/DM107');

    var getConnection = conn.connect(function(err){
        if(!err){
        console.log('Database connected');
        }else{
        console.log('Database is not started.');
        } 
	});

router.get('/', function(req,res) {

		var query = conn.query('SELECT * FROM entregas',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
			
			if(rows.length == 0){
                res.status(404).json("Deliverys not found !");
            }else{
				res.status(200).json(rows);
            }
         });
});

router.get('/:id', function (req,res){

		var query = conn.query('SELECT * FROM entregas where idEntrega = ?',[req.params.id],function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
			
			if(rows.length == 0){
                res.status(404).json("Delivery not found !");
            }else{
				res.status(200).json(rows);
            }
         });  

});

router.post('/', function(req,res) {

    //get data
    var data = {
        idEntrega:req.body.idEntrega,
        idPedido:req.body.idPedido,
        idCliente:req.body.idCliente,
        nomeRecebedor:req.body.nomeRecebedor,
        cpfRecebedor:req.body.cpfRecebedor,
        recebedorcomprador:req.body.recebedorcomprador,
        datahoraEntrega:req.body.datahoraEntrega,
        localizacao:req.body.localizacao
     };

		var query = conn.query('INSERT INTO entregas set ? ',data, function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
			
		    res.status(200).json("Delivery inserted Sucess");
         
         });   
});

router.put('/:id', function(req,res) {
    var idEntrega = req.params.id;

    //get data
    var data = {
        idEntrega:req.body.idEntrega,
        idPedido:req.body.idPedido,
        idCliente:req.body.idCliente,
        nomeRecebedor:req.body.nomeRecebedor,
        cpfRecebedor:req.body.cpfRecebedor,
        recebedorcomprador:req.body.recebedorcomprador,
        datahoraEntrega:req.body.datahoraEntrega,
        localizacao:req.body.localizacao
     };
	 
	
	var query = conn.query('UPDATE entregas set ? WHERE idEntrega = ? ',[data,idEntrega], function(err, rows){

        if(err){
                console.log(err);
                res.status(404).json('Delivery not UPDATE');
        }
			
	    console.log('Delivery Update Sucess');
		res.status(200).json("Delivery updated Sucess");
         
    });
});
   
router.delete('/:id', function(req,res){

    var idEntrega = req.params.id;
	
	var query = conn.query('DELETE FROM entregas  WHERE idEntrega = ? ',[idEntrega], function(err, rows){

        if(err){
                console.log(err);
                res.status(404).json('Delivery not Deleted');
        }
		
	    console.log("Delivery deleted sucess");
        res.status(200).json("Delivery deleted Sucess");
		
    });
});

module.exports = router;