const usuariosRouter = require('./usuarios.router');
//funcion para esportar a el index de nuestra aplicacion y donde enviaremos el
//arreglo de  end point´s
function routerApi(app){
  app.use('/usuarios', usuariosRouter);
}

module.exports = routerApi
