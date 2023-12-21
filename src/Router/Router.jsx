import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Components/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
              path:'login',
              element:<Login></Login>
            },
            {
              path:'/signUp',
              element:<SignUp></SignUp>
            },
          ],
    },
]);
export default router