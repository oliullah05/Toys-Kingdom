import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import EditToy from "../Pages/MyToys/EditToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path: "/alltoys",
          element: <AllToys />
        },
        {
          path: "/addAToy",
          element: <AddAToy></AddAToy>,
        },
        {
          path: "/mytoys",
          element: <MyToys></MyToys>,
      
        },
        {
          path: "/edit/:id",
          element: <EditToy></EditToy>,
          loader:({params})=>fetch(`http://localhost:5000/alltoys/${params.id}`)
      
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },









  ]);
  






export default router;