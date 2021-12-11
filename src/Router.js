import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/layout';
import { isAuthenticated } from "./config/storage";
import AdministratorUser from "./views/DashboardAdminstrator";
import DashboardUser from "./views/DashboardGenericUser";
import PartnerUser from "./views/DashboardPartner";
import Home from "./views/Home";
import LoginUser from "./views/LoginUser";
import RegisterUser from "./views/RegisterUser";

function Router() {
  const PrivateRouter = ({ component: Component, ...rest }) => {
    const isLogin = rest.path === "/user/login";
    const user = useSelector((state) => state.user.user);

    if (!isAuthenticated() && !isLogin) {
      return <Redirect to="/user/login" noThrow />;
    }
    if (isAuthenticated() && isLogin) {
      return <Redirect to={"/user/dashboard"} noThrow />;
    }

    const isDashboard = rest.path === "/user/dashboard" || rest.path === "/user/dashboardAdm" || rest.path === "/user/dashboardPartner";

    if (isDashboard) {
      if (user.isAdministrator && rest.path !== "/user/dashboardAdm") {
        return <Redirect to={"/user/dashboardAdm"} noThrow />;
      }
      else if (user.isPartner && rest.path !== "/user/dashboardPartner") {
        return <Redirect to={"/user/dashboardPartner"} noThrow />;
      }
      else if (user.isGenericUser && rest.path !== "/user/dashboard") {
        return <Redirect to={"/user/dashboard"} noThrow />;
      }

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
