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
  user_name text NOT NULL,
  user_description text NOT NULL,
  user_img text NOT NULL,
  user_id int(10) NOT NULL DEFAULT '0',
  primary key (user_id)
);

INSERT INTO users (user_name, user_description, user_img, user_id) VALUES
('André Bustamante', 'Estudante', 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11113558_853458714727882_7626110956733991512_n.jpg?oh=6a0a2dc5acf6fbdb76cebd930e05dbf0&oe=56BFFED6', 0),
('Luiz Felipe', 'Estudante', 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11760250_838593922899025_2740077187122789542_n.jpg?oh=ca78d7ec39e45a9f63b86dc76096c6f6&oe=56B22E2C', 1),
('Edy Segura', 'Professor', 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/t31.0-8/p843x403/10714165_729269070477099_100942302374640039_o.jpg', 2);

















SELECT user_name, user_description, user_img, user_id, nomeRecebedor, cpfRecebedor, localizacao FROM users T1 INNER JOIN entregas T2 ON T1.user_id = T2.idCliente