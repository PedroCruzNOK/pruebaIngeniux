//se importa la clase sala y el esquema  de su modelo
const { Usuario, UsuarioSchema} = require('./usuario.model');

//funcion para inicializar los esquemas de los modelos
function setupModels (sequelize){
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

//se exportan los modelos creados
module.exports = setupModels;
