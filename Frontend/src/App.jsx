import Login from "./logIn-page/login.jsx"
import Signup from "./sigUp-page/signUp.jsx";
import Product from "./product-Page/product.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import products from "./product-Page/products-full.jsx";

//onst Products = [{name:'tommato'},{name :'banana'}];


function App() {
    const route = createBrowserRouter([
        {
          path: "/",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
            path: "/product",
            element: <Product product={products}/>
        },
      ]);

    return (
        <>
           <RouterProvider router={route}></RouterProvider>
          
      
           
        </>
    );
}

export default App;

