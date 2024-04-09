import { createBrowserRouter } from "react-router-dom";
import { AboutMe } from "../UI/Screens/AboutMe/AboutMe";
import { Resume } from "../UI/Screens/Resume/Resume";
import { Contact } from "../UI/Screens/Contact/Contact";
import { Portfolio } from "../UI/Screens/Portfolio/Portfolio";
import { App } from "../App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App childComponent={AboutMe} />,
  },
  {
    path: "/aboutme",
    element: <App childComponent={AboutMe} />,
  },
  {
    path: "/resume",
    element: <App childComponent={Resume} />,
  },
  {
    path: "/portfolio",
    element: <App childComponent={Portfolio} />,
  },
  {
    path: "/contact",
    element: <App childComponent={Contact} />,
  },
]);
