import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/ErrorPage";
import LoginForm from "../component/forms/LoginForm";
import RegForm from "../component/forms/RegForm";
import AddAToy from "../component/pages/addAToy/AddAToy";
import AllToy from "../component/pages/allToy/AllToy";
import Blog from "../component/pages/blog/Blog";
import EditToy from "../component/pages/myToys/EditToy";
import MyToys from "../component/pages/myToys/MyToys";
import ToyDetails from "../component/pages/toyDetails/ToyDetails";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/signUp",
    element: <RegForm></RegForm>,
  },
  {
    path: "/signIn",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "/allToy",
    element: <AllToy></AllToy>,
  },
  {
    path: "/myToys",
    element: (
      <PrivateRoute>
        <MyToys></MyToys>
      </PrivateRoute>
    ),
  },
  {
    path: "/editToy/:id",
    element: (
      <PrivateRoute>
        <EditToy></EditToy>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/toyDetails/${params.id}`),
  },
  {
    path: "/addAToy",
    element: (
      <PrivateRoute>
        <AddAToy></AddAToy>
      </PrivateRoute>
    ),
  },
  {
    path: "/viewDetails/:id",
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/toyDetails/${params.id}`),
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default Routes;
