import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "mid-light",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products/:id", element: <ProductPage /> },
    ],
  },
]);

export default router;
