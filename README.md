# Trabalho DM107

Para utilizar os serviços deste trabalho, é necessário ter o MySQL instalado e estar inicializado no computador e as tabelas entregas e users criadas no MySQL.
Dentro deste trabalho existe um arquivo chamado Delivery.SQL que contem o Create e o Insert das tabelas.

Para acessar a aplicacao é necessario estar dentro da pasta do projeto e executar os comandos : 
- npm install
- npm start 

O servidor esta rodando na porta 8080, portanto para testar os serviços será necessario utilizar a seguinte url :
http://localhost:8080/

# Metodos do CRUD

Get All - http://localhost:8080/api/Deliverys

Get por ID - http://localhost:8080/api/Deliverys/{IDEntrega}.

Post - http://localhost:8080/api/Deliverys
Utilizando o seguinte formato JSON :
{
  "idEntrega": 0,
  "idPedido": 0,
  "idCliente": 0,
  "nomeRecebedor": "string",
  "cpfRecebedor": "string",
  "recebedorcomprador": true,
  "datahoraEntrega": "string",
  "localizacao": "string"
}

Delete - http://localhost:8080/api/Deliverys/{IDEntrega}.

Put - http://localhost:8080/api/Deliverys/{IDEntrega}
Utilizando o seguinte formato JSON :
{
  "idEntrega": 0,
  "idPedido": 0,
  "idCliente": 0,
  "nomeRecebedor": "string",
  "cpfRecebedor": "string",
  "recebedorcomprador": true,
  "datahoraEntrega": "string",
  "localizacao": "string"
}

# Relatório

O Relatório se encontra na porta 8000, ele tras os dados de entrega por cada usuário.
URL do Relatório : http://localhost:8000.
