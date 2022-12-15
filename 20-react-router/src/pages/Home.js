import { Route } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h2>Welcome to my React Website!</h2>
      <Route path="/welcome/new-user">
        <p>Welcome Dear User!</p>
      </Route>
    </div>
  );
}

export default Home;
