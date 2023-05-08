import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffeePage from "../pages/AddCoffeePage";
import CoffeeViewPage from "../pages/CoffeeViewPage";
import UpdateCoffee from "../pages/UpdateCoffee";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/addCoffee"),
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
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/updateCoffee/${params.id}`),
  },
]);

export default routes;
