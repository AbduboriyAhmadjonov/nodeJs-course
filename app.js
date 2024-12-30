const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// If it cannot find those, it will show this
app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Add Product',
    path: '',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

app.listen(3000);
