CREATE TABLE `entregas` (
  `idEntrega` int(11) NOT NULL,
  `idPedido` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `nomeRecebedor` varchar(45) NOT NULL,
  `cpfRecebedor` varchar(45) NOT NULL,
  `recebedorcomprador` tinyint(1) NOT NULL,
  `datahoraEntrega` datetime(6) NOT NULL,
  `localizacao` varchar(45) NOT NULL,
  PRIMARY KEY (`idEntrega`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
