import { Router } from "express";
import cafeteriaController from '../controllers/producto.controllers';

const router = Router();

const {getPrueba, crearProducto, listarProductos, eliminarProducto, actualizarProducto} = cafeteriaController;

//crear las rutas

router.route('/').get(listarProductos).post(crearProducto);
router.route('/:id').delete(eliminarProducto).put(actualizarProducto);

export default router;