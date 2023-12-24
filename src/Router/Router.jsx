import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Components/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import DashBoard from "../pages/DashBoard/DashBoard/DashBoard";
import CreatNewJob from "../pages/DashBoard/CreatNewJob/CreatNewJob";
import SeePrevious from "../pages/DashBoard/SeePrevious/SeePrevious"
import ToDo from "../pages/DashBoard/ToDo/ToDo"
import OnGoing from "../pages/DashBoard/OnGoing/OnGoing"
import Completed from "../pages/DashBoard/Completed/Completed"
import PrivateRouter from "../Provider/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
    ],
  },
  {
    path: 'dashBoard',
    element: <PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
    children: [
      {
        path: 'creatNewJob',
        element: <CreatNewJob></CreatNewJob>
      },
      {
        path: 'seePrevious',
        element: <SeePrevious></SeePrevious>
      },
      {
        path: 'toDoList',
        element: <ToDo></ToDo>
      },
      {
        path: 'onGoing',
        element: <OnGoing></OnGoing>
      },
      {
        path: 'completed',
        element: <Completed></Completed>
      },
    ]
  }
]);
export default router