import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffeePage from "../pages/AddCoffeePage";
import CoffeeViewPage from "../pages/CoffeeViewPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "addCoffeePage",
    element: <AddCoffeePage />,
  },
  {
    path: "coffeeViewPage/:id",
    element: <CoffeeViewPage />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/coffeeViewPage/${params.id}`),
  },
]);

export default routes;
