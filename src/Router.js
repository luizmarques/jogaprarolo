import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/layout';
import { isAuthenticated } from "./config/storage";
import DashboardUser from "./views/DashboardUser";
import Home from "./views/Home";
import LoginUser from "./views/LoginUser";
import RegisterUser from "./views/RegisterUser";

function Router() {
  const PrivateRouter = ({ component: Component, ...rest }) => {
    const isLogin = rest.path === "/login";
    // const userRoleRoute = useSelector((state) => state.auth?.type.route);

    if (!isAuthenticated() && !isLogin) {
      return <Redirect to="/login" noThrow />;
    }
    if (isAuthenticated() && isLogin) {
      return <Redirect to={"/user/dashboard"} noThrow />;
    }
    return <Component {...rest} />;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/user/login" component={LoginUser} exact />
          <Route path="/user/register" component={RegisterUser} exact />
          <PrivateRouter path="/user/dashboard" component={DashboardUser} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
