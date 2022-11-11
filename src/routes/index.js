import routesConfig from "../config/routes";
import Form from "../pages/Form/Form";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";
import SearchFilter from "../pages/SearchFilter/SearchFilter";

export const publicRoutes = [
  {
    id: 1,
    path: routesConfig.home,
    element: Home,
  },
  {
    id: 2,
    path: routesConfig.search,
    element: SearchFilter,
  },
  {
    id: 3,
    path: routesConfig.form,
    element: Form,
  },
  {
    id: 4,
    path: routesConfig.quiz,
    element: Quiz,
  },
];
