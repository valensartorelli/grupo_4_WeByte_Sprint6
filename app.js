const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const PORT = process.env.PORT || 3000

// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs'); 
// configura ruta public
app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.json())  
//URL encode permite req.body
app.use(express.urlencoded({ extended: false }));

//permite metodos put / delete
app.use(methodOverride('_method'));

//User
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);

// llamo al router
const homeRoutes = require('./src/routes/homeRoutes');
const productRoutes = require('./src/routes/productRoutes');
const colorRoutes = require('./src/routes/colorRoutes');
const brandRoutes = require('./src/routes/brandRoutes');
const sizeRoutes = require('./src/routes/sizeRoutes');
const visibilityRoutes = require('./src/routes/visibilityRoutes');
const userRoutes = require('./src/routes/userRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const rolRoutes = require('./src/routes/rolRoutes');
const addressRoutes = require('./src/routes/addressRoutes');


// ruteo
app.use('/', homeRoutes);
app.use('/product', productRoutes);
app.use('/color', colorRoutes);
app.use('/brand', brandRoutes);
app.use('/size', sizeRoutes);
app.use('/visibility', visibilityRoutes);
app.use('/users', userRoutes);
app.use('/category', categoryRoutes);
app.use('/rol', rolRoutes);
app.use('/address', addressRoutes);


//app.use('/', (req, res) => res.json({ clave: "con el server" }));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto'  +  PORT)
}

);