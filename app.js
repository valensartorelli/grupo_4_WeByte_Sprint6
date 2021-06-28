const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000

// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs'); 

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json())
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

// llamo al router
const indexRoutes = require('./src/routes/indexRoutes');
const productRoutes = require('./src/routes/productRoutes');
const colorRoutes = require('./src/routes/colorRoutes');
const userRoutes = require('./src/routes/userRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');


// ruteo
app.use('/', indexRoutes);
app.use('/product', productRoutes);
app.use('/color', colorRoutes);
app.use('/users', userRoutes);
app.use('/category', categoryRoutes);


//app.use('/', (req, res) => res.json({ clave: "con el server" }));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto'  +  PORT)
}

);