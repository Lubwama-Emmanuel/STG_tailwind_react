import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
