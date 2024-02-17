import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Credentials from "../Pages/Credentials/Credentials";
import OfferingServices from "../Pages/Offering Services/OfferingServices";
import CredentialsDetails from "../Pages/Credentials/CredentialsDetails";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "credentials",
        element: <Credentials></Credentials>,
      },
      {
        path: "credentialDetails/:id",
        element: <CredentialsDetails></CredentialsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/credentials/${params.id}`),
      },
      // {
      //   path: "serviceDetails/:id",
      //   element: <CredentialsDetails></CredentialsDetails>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://car-doctor-server-sigma-ruby.vercel.app/services/${params.id}`
      //     ),
      // },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "offeringServices",
        element: <OfferingServices></OfferingServices>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default MainRoute;
