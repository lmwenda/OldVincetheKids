import React from "react";
import jwt from "jsonwebtoken";
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
import SettingScreen from "./screens/SettingScreen";

function App() {

  // Getting JWT Tokens and User ID

  const token: any = localStorage.getItem("token");
  const _id: any = jwt.decode(token);

  // Expired Tokens

  React.useEffect(() => {
    if(token){
      if(_id.exp < Date.now() / 1000){
        localStorage.removeItem("token");
      }else{
        return;
      }
    }
  });

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

          {
            token ? <Route path={`/user/settings/${_id._id}`} component={SettingScreen} exact /> : null
          }

        </Switch>

        <Footer title={"VincetheKids"} />

    </BrowserRouter>
  );
}

export default App;
