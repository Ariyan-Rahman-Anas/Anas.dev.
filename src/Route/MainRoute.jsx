import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Spinner from "../Components/Spinner";

const MainLayout = lazy(() => import("./../Layout/MainLayout"))
const Home = lazy(()=>import("./../Pages/Home/Home"))
const About = lazy(()=>import("./../Pages/About/About"))
const Projects = lazy(()=>import("./../Pages/Projects/Projects"))
const Contact = lazy(()=>import("./../Pages/Contact/Contact"))
const Credentials = lazy(() => import("./../Pages/Credentials/Credentials"))
const CredentialsDetails = lazy(() => import("./../Pages/Credentials/CredentialsDetails"))
const OfferingServices = lazy(() => import("./../Pages/Offering Services/OfferingServices"))
const BlogsPage = lazy(() => import("./../Pages/BlogsPage/BlogsPage"))

const Dashboard = lazy(() => import("./../Pages/Dashboard/Dashboard"))

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Spinner />} >
      <MainLayout />
    </Suspense>,
    // element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/> ,
      },
      {
        path: "credentials",
        element: <Credentials /> 
      },
      {
        path: "credentialDetails/:id",
        element: <CredentialsDetails /> ,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "offering-services",
        element: <OfferingServices />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default MainRoute;