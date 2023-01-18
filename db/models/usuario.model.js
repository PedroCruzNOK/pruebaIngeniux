//se importa el orm para definir el modelo
const {Model, DataTypes, Sequelize} = require ('sequelize');

const USUARIO_TABLE = 'usuarios';

//esquema que tendra  un usuario en su tabla, aqui iran los campos que fgromaran la tabla de usuarios
const UsuarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
  },
  apellidopaterno: {
      allowNull: false,
      type: DataTypes.STRING
  },
  apellidomaterno: {
    allowNull: false,
    type: DataTypes.STRING
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  codigopostal: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  telefono: {
    allowNull: true,
    type: DataTypes.STRING
  },
  estadocivil: {
    allowNull: true,
    type: DataTypes.STRING
  },
  fechanacimiento: {
    allowNull: false,
    type: DataTypes.DATE
  },

  pais: {
    allowNull: false,
    type: DataTypes.STRING
  },
  estado: {
    allowNull: true,
    type: DataTypes.STRING
  },
  municipio: {
    allowNull: true,
    type: DataTypes.STRING
  },
  localidad: {
    allowNull: true,
    type: DataTypes.STRING
  },
  idioma: {
    allowNull: false,
    type: DataTypes.STRING
  },
  pasatiempo: {
    allowNull: true,
    type: DataTypes.STRING
  },
  preferencias: {
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW

  },
}

//la clase Usuario  estendera de un modelo
class Usuario extends Model{
  static associate(){

  }

  static config(sequelize){
      return {
          sequelize,
          tableName: USUARIO_TABLE,
          modelName: 'Usuario',
          timestamps: false
      }
  }
}

//se exporta el schema  y la clase para su uso
module.exports = {USUARIO_TABLE, UsuarioSchema, Usuario};
