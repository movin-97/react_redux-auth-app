import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup"

const routers = [
  {
    path: "*",
    component: <h1>Page 404 Error</h1>,
  },
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <Signup />,
  },
];

export default routers;
