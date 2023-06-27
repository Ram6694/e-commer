import './App.css';
//import Header from '../my-app/src/components/Header';
// import Footer from '../my-app/src/components/Footer'
// import Home from '../my-app/src/components/Home'
// import About from '../my-app/src/components/About'
// import Product from '../my-app/src/components/Product'
 import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
 import ProductDetail from './components/ProductDetail';
 import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import About from './components/About';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
