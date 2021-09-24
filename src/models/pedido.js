import mongoose, {Schema} from  'mongoose';

const pedidoSchema = new Schema({
    idPedido:{
        type: Number,
    }},{
        timestamps: true
    })

const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;