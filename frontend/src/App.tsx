import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./screens/HomeScreen";
import Item from "./screens/ItemScreen";
import Footer from "./components/Footer";
import Header from './components/Header';
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
      <BrowserRouter>

        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path={`/Shop/Cart`} component={CartScreen} exact />
          <Route path="/item/:id" component={Item} exact />
          <Route path="/Shop" component={ProductScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
        </Switch>

        <Footer title={"VincetheKids"} />

    </BrowserRouter>
  );
}

export default App;
