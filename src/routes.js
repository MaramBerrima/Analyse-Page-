import Dashboard from "views/Dashboard/Dashboard.js";
import Accueil from "views/Pages/accueil.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Home from "views/Pages/home";
import Comparisant from "views/Pages/comparisant";
import {
  HomeIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/test",
    name: "Test",
    icon: <HomeIcon color='inherit' />,
    component: Accueil,
    layout: "/accueil",
  },

  {
    path: "/test",
    name: "Home",
    icon: <HomeIcon color='inherit' />,
    component: Home,
    layout: "/home",
  },

  {
    path: "/test",
    name: "Home",
    icon: <HomeIcon color='inherit' />,
    component: Comparisant,
    layout: "/comparisant",
  },
 
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [

      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
