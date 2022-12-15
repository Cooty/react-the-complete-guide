import { Redirect, Route, Switch } from "react-router-dom";
import AddQuote from "./pages/AddQuote";
import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:id">
          <Quote />
        </Route>
        <Route path="/quote/add" exact>
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
