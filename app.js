const path = require('path');

const express = require('express');
const adminData = require('./routes/admin');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// If it cannot find those, it will show this
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
