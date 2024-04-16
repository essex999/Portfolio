import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { AboutMe } from "../UI/Screens/AboutMe/AboutMe";
import { Contact } from "../UI/Screens/Contact/Contact";
import { Portfolio } from "../UI/Screens/Portfolio/Portfolio";
import { Resume } from "../UI/Screens/Resume/Resume";
import { basePatchPrefix } from "../const/const";
export const router = createBrowserRouter([
  {
    path: `${basePatchPrefix}`,
    element: <App childComponent={AboutMe} />,
  },
  {
    path: `${basePatchPrefix}aboutme`,
    element: <App childComponent={AboutMe} />,
  },
  {
    path: `${basePatchPrefix}resume`,
    element: <App childComponent={Resume} />,
  },
  {
    path: `${basePatchPrefix}portfolio`,
    element: <App childComponent={Portfolio} />,
  },
  {
    path: `${basePatchPrefix}contact`,
    element: <App childComponent={Contact} />,
  },
]);
