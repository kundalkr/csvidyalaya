import { createRoot } from "react-dom/client";
import Mainpage from "/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return <Mainpage />;
};

const appRouter = createBrowserRouter([{ path: "/", element: <App /> }]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);