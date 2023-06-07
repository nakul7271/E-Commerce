import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SummaryPage from "./pages/SummaryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>ErrorPage</h1>,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "summary", element: <SummaryPage /> },
      { path: "cart", element: <CartPage /> },
      {path: "checkout", element: <CheckoutPage/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
