import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
              path:'login'
            },
          ],
    },
]);
export default router