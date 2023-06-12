import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SummaryPage from "./pages/SummaryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import ContactUsPage from "./pages/ContactUsPage";
import AccountPage from "./pages/AccountPage";
import AuthenticationPage from "./pages/AuthenticationPage";

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
      { path: "checkout", element: <CheckoutPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "contact", element: <ContactUsPage /> },
      { path: "account", element: <AccountPage /> },
      {path:"auth", element: <AuthenticationPage/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
