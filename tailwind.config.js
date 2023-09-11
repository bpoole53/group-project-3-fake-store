/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/src/components/Footer.jsx', './client/src/components/CartTotal.jsx', './client/src/components/Footer.jsx', './client/src/components/Header.jsx', './client/src/components/Hero.jsx', './client/src/components/LoginForm.jsx', './client/src/components/Navbar.jsx', './client/src/components/ProductCard.jsx', './client/src/components/Container.jsx', './client/src/pages/About.jsx', './client/src/pages/Cart.jsx', './client/src/pages/Checkout.jsx', './client/src/pages/Home.jsx', './client/src/pages/Login.jsx', './client/src/pages/ProductPage.jsx', './client/src/pages/Products.jsx', './client/src/pages/Profile.jsx', './client/src/pages/Signup.jsx', './client/src/utils/AppContext.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

