import mongoose, {Schema} from  'mongoose';

const lineaPedidoSchema = new Schema({
    cantidad:{
        type: Number,
        required: true
    },
    tasaDeImpuesto:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    },
    totalParcial:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
})

const lineaPedido = mongoose.model('lineaPedido', lineaPedidoSchema);
export default lineaPedido;
