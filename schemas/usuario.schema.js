const joi = require('joi');
const id = joi.number().integer();
const nombre = joi.string();
const apellidopaterno = joi.string();
const apellidomaterno = joi.string();
const edad = joi.number().integer();
const codigopostal = joi.number().integer();
const telefono = joi.string();
const estadocivil = joi.string();
const fechanacimiento= joi.date();
const pais = joi.string();
const estado = joi.string();
const municipio = joi.string();
const localidad = joi.string();
const idioma = joi.string();
const pasatiempo = joi.string();
const preferencias = joi.string();


const createUsuarioSchema = joi.object({
  nombre: nombre.required(),
  apellidopaterno: apellidopaterno.allow(),
  apellidomaterno: apellidomaterno.allow(),
  edad: edad.allow(),
  codigopostal: codigopostal.allow(),
  telefono: telefono.allow(),
  estadocivil: estadocivil.allow(),
  fechanacimiento: fechanacimiento.allow(),
  pais: pais.allow(),
  estado: estado.allow(),
  municipio: municipio.allow(),
  localidad: localidad.allow(),
  idioma: idioma.allow(),
  pasatiempo: pasatiempo.allow(),
  preferencias: preferencias.allow(),

});

const updateUsuarioSchema = joi.object({
  id: id.allow(),
  nombre: nombre.required(),
  apellidopaterno: apellidopaterno.allow(),
  apellidomaterno: apellidomaterno.allow(),
  edad: edad.allow(),
  codigopostal: codigopostal.allow(),
  telefono: telefono.allow(),
  estadocivil: estadocivil.allow(),
  fechanacimiento: fechanacimiento.allow(),
  pais: pais.allow(),
  estado: estado.allow(),
  municipio: municipio.allow(),
  localidad: localidad.allow(),
  idioma: idioma.allow(),
  pasatiempo: pasatiempo.allow(),
  preferencias: preferencias.allow(),



})
const getUsuarioSchema= joi.object({id:id.required(),});

module.exports = {createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema}
