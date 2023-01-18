//importamos los modelos de nuestra estructura del orm
const { models }= require('../libs/sequelize');

//clase usuario, aqui se definen los metodos
class UsuarioService{
  constructor() {

  }

  //metodo para crear un nuevo usuario
  async create (data){
    const newUsuario = await models.Usuario.create(data);
    return newUsuario;
  }

  //metodo para obtener todos los usuarios
  async find (){
    const rta = await models.Usuario.findAll();
    return rta;
  }

  //metodo para obtener un solo usuario por id
  async findOne(id){
    const usuario = await models.Usuario.findByPk(id);
        if(!usuario){
          console.log('error findone')
        }
        return usuario;
  }

  //metodo para actualizar la informacion de un usuario
  async update(id, changes){
    const usuario = await this.findOne(id);
    const rta= await usuario.update(changes);
    return rta;
  }

  //metodo para eliminar un usuario
  async delete(id){
    const usuario = await this.findOne(id);
    await usuario.destroy();
    return usuario;
  }

}

//se exportan  los metodos  del servicio de usuarios
module.exports = UsuarioService;
