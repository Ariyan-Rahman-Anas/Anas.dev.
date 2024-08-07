import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Credentials from "../Pages/Credentials/Credentials";
import OfferingServices from "../Pages/Offering Services/OfferingServices";
import CredentialsDetails from "../Pages/Credentials/CredentialsDetails";
import ErrorPage from "../Pages/Error/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
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
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "offeringServices",
        element: <OfferingServices></OfferingServices>,
      },
      {
        path: "blogs",
        element: <BlogsPage></BlogsPage>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default MainRoute;