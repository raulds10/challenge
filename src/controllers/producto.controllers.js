import Producto from "../models/producto";
const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req,res) => {
    res.send("prueba desde el controlador");
}

cafeteriaCtrl.crearProducto = async (req,res) =>{
    console.log(req.body)
    try{
        const {nombreProducto, precioProducto, categoria} = req.body;
        //creo un objet para guardar en la db
        const productoNuevo = new Producto({
            nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            categoria: categoria,
        })   
        //guardo el productoNuevo en la db
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "Producto agregado a la db"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error"
        })
    }
}

cafeteriaCtrl.listarProductos = async (req,res)=>{
    try{
        const arregloProductos = await Producto.find();
        res.status(200).json(arregloProductos); 
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error"
        })
    }
}

cafeteriaCtrl.eliminarProducto = async(req,res) => {
    try{
        console.log(req.params.id);
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "El producto fue eliminado"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error"
        })
    }
}

cafeteriaCtrl.actualizarProducto = async(req, res) => {
    try{
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "el producto se modifico correctamente"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error"
        })
    }
}


export default cafeteriaCtrl;