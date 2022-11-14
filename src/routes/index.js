import HeaderLayout from "../components/HeaderLayout/HeaderLayout";
import routesConfig from "../config/routes";
import Form from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";
import SearchFilter from "../pages/SearchFilter/SearchFilter";
import Login from "../pages/Login/Login";

export const publicRoutes = [
  {
    id: 1,
    path: routesConfig.home,
    element: Home,
    name: "Home",
  },
  {
    id: 2,
    path: routesConfig.search,
    element: SearchFilter,
    layout: HeaderLayout,
    name: "Search",
  },
  {
    id: 3,
    path: routesConfig.form,
    element: Form,
    layout: HeaderLayout,
    name: "Register",
  },
  {
    id: 4,
    path: routesConfig.quiz,
    element: Quiz,
    layout: HeaderLayout,
    name: "Quiz App",
  },
  {
    id: 5,
    path: routesConfig.login,
    element: Login,
    layout: HeaderLayout,
    name: "Login",
  },
];
