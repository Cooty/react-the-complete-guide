import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
