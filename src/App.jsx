import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import About from "./pages/About";

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
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
