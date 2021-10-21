import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";

export const PrincipalRouter = () => {
  const { authUser } = useContext(UsersContext);
  const { isAuth } = authUser;
  console.log(isAuth);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/">{isAuth ? <Main /> : <Redirect to="/login" />}</Route>
        </Switch>
      </Router>
    </>
  );
};
