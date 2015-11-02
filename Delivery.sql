CREATE TABLE entregas (
  idEntrega int(11) NOT NULL,
  idPedido int(11) NOT NULL,
  idCliente int(11) NOT NULL,
  nomeRecebedor varchar(45) NOT NULL,
  cpfRecebedor varchar(45) NOT NULL,
  recebedorcomprador tinyint(1) NOT NULL,
  datahoraEntrega varchar(45) NOT NULL,
  localizacao varchar(45) NOT NULL,
  PRIMARY KEY (idEntrega)
) 

CREATE TABLE users ( 
	user_id int NOT NULL,
	user_name varchar(45) NOT NULL,
	user_description varchar(45) NOT NULL,
	user_img varchar(45) NOT NULL,


);




















SELECT user_name, user_description, user_img, user_id, nomeRecebedor, cpfRecebedor, localizacao FROM users T1 INNER JOIN entregas T2 ON T1.user_id = T2.idCliente