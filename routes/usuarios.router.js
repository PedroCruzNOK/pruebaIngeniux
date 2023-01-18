//importacion de dependencias
const express = require('express');
const UsuarioService = require('../services/usuario.service');
const  validatorHandler = require('../midlewares/validator.handlre');
const{getUsuarioSchema, updateUsuarioSchema,createUsuarioSchema}=require('../schemas/usuario.schema');

const router = express.Router();
const service = new UsuarioService();

//end point para obtener listado de usuarios
router.get('/',async(req,res,next)=>{
  try{
    const usuarios=await service.find();
    res.json(usuarios);
  }
  catch(error)
  {
    next(error);

  }});

//end point para obtener un usuario especifico
router.get('/:id',validatorHandler(getUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuario = await service.findOne(id);
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  }
);

//end point para crear un nuevo usuario
router.post('/', validatorHandler(createUsuarioSchema, 'body'),
  async(req,res,next)=>{
    try{
      const body= req.body;
      const newUsuario = await service.create(body);

      res.status(201).json(newUsuario);
    }
    catch(error){
      next(error);

    }
  }
);

//end point para editar un usuario
router.patch('/:id',
  validatorHandler(getUsuarioSchema, 'params'),
  validatorHandler(updateUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const usuario = await service.update(id, body);
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  }
);

//end point para eliminar un usuario por id
router.delete('/:id',validatorHandler(getUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
