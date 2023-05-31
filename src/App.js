
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import Shop from "./components/shop/Shop";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h1>ErrorPage</h1>,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      {path: "shop", element: <Shop/> }
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;


