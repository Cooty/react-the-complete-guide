import React, { useEffect, Suspense } from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Comments = React.lazy(() => import("../components/comments/Comments"));

function Quote() {
  const match = useRouteMatch();
  const id = match.params.id;
  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const loadingState = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  )

  if (status === "pending") {
    return loadingState;
  }

  if (status === "completed" && !quote) {
    return <p>No quote found :(</p>;
  }

  if (status === "completed" && error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && quote) {
    return (
      <>
        <HighlightedQuote author={quote.author} text={quote.text} />
        <Route exact path={match.path}>
          <div className="centered">
            <Link to={`${match.url}/comments`} className="btn--flat">
              Comment on this
            </Link>
          </div>
        </Route>

        <Route path={`${match.path}/comments`}>
          <Suspense fallback={loadingState}>
            <Comments />
          </Suspense>
        </Route>
      </>
    );
  }
}

export default Quote;
