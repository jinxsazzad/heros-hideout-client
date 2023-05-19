import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../component/ErrorPage";
import RegForm from "../component/forms/RegForm";
import LoginForm from "../component/forms/LoginForm";
import AddAToy from "../component/pages/addAToy/AddAToy";
import AllToy from "../component/pages/allToy/AllToy";
import MyToys from "../component/pages/myToys/MyToys";
import EditToy from "../component/pages/myToys/EditToy";
import ToyDetails from "../component/pages/toyDetails/ToyDetails";
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
    element: <div>blog page</div>,
  },
]);

export default Routes;
