const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res) => {
  console.log('shop.js: ', adminData.products);
  const products = adminData.products;
  res.render('shop', {
    products: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
