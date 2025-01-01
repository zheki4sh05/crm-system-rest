
import { createBrowserRouter, RouterProvider } from "react-router";

import Page404 from "./pages/404";
import Layout from "./processes/Layout";
import { PathConstants } from "./app/contants/PathContants";
import Main from "./pages/main/ui/Main";
import Deals from "./pages/deals/ui/Deals";


function App() {
    const router = createBrowserRouter([
      {
       
        element: <Layout />,

        errorElement: <Page404 />,
        children: [
          {
            path: PathConstants.HOME,
            element: <Main />,
          },
          {
            path: PathConstants.DEALS,
            element: <Deals />,
          },     
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
  }
  
  export default App