import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import productoRoutes from './routes/producto.routes';

//settings
import './database';

const app = express(); //creo una instancia de express

app.set('port', process.env.PORT || 4000); 


app.listen(app.get('port'), () => {
    console.log(path.join(__dirname, "../public"));
    console.log("estoy escuchando el puerto "+app.get('port'));
})

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "../public")));


//ruta 
app.get('/', (req,res) => {
    res.send("hola mundo :)")
});

app.use('/api/cafeteria', productoRoutes);