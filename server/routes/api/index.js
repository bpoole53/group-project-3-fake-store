const router = require('express').Router();
const authRoutes = require('./auth-routes');
const userRoutes = require('./user-routes');
const cartRoutes = require('./cart-routes');
const productRoutes = require('./product-routes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);
router.use('/product', productRoutes);

module.exports = router;