import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/layout';
import AdministratorUser from "./components/users/AdministratorUser";
import PartnerUser from "./components/users/PartnerUser";
import { isAuthenticated } from "./config/storage";
import DashboardUser from "./views/DashboardUser";
import Home from "./views/Home";
import LoginUser from "./views/LoginUser";
import RegisterUser from "./views/RegisterUser";

function Router() {
  const PrivateRouter = ({ component: Component, ...rest }) => {
    const isLogin = rest.path === "/user/login";
    const isGenericUserRoute = rest.path === "/user/dashboard";
    const isAdmRoute = rest.path === "/user/dashboardAdm";
    const isPartnerRoute = rest.path === "/user/dashboardPartner";
    const user = useSelector((state) => state.user.user);

    if (!isAuthenticated() && !isLogin) {
      return <Redirect to="/user/login" noThrow />;
    }
    if (isAuthenticated() && isLogin) {
      return <Redirect to={"/user/dashboard"} noThrow />;
    }

    if (isAdmRoute && !user.isAdministrator) {
      return <Redirect to={"/user/login"} noThrow />;
    }
    if (isGenericUserRoute && !user.isGenericUser) {
      return <Redirect to={"/user/login"} noThrow />;
    }
    if (isPartnerRoute && !user.isPartner) {
      return <Redirect to={"/user/login"} noThrow />;
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
          <PrivateRouter path="/user/dashboardAdm" component={AdministratorUser} exact />
          <PrivateRouter path="/user/dashboardPartner" component={PartnerUser} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
