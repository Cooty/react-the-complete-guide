import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const Quote = React.lazy(() => import("./pages/Quote"));
const Quotes = React.lazy(() => import("./pages/Quotes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const LoadingSpinner = React.lazy(() => import("./components/UI/LoadingSpinner"));

function App() {
  const loader = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  return (
    <Suspense fallback={loader}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={loader}>
              <Quotes />
            </Suspense>
          </Route>
          <Route path="/quotes/:id">
            <Suspense fallback={loader}>
              <Quote />
            </Suspense>
          </Route>
          <Route path="/quote/add" exact>
            <Suspense fallback={loader}>
              <AddQuote />
            </Suspense>
          </Route>
          <Route path="*">
            <Suspense fallback={loader}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
