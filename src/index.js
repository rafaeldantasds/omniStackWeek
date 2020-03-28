const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
* Métodos HTTP:
* get Buscar informação do backend
* post criar uma informação no backend
* put alterar uma informação no backend
* delete deletar uma informação no backend
*/
/**
 * Tipos de parametros
 * Query Params : Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params : Parãmetros utilizados para identificar recursos
 * Request Body : Corpo da requisição utilizado para alterar ou criar recursos
 */

 /**
  * Driver: SELECT * FROM USERs
  * QueryBuilder: table('users').select('*').where('')
  */
