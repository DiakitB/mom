import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FirstApp from "./components/FirstApp";
import SecondApp from "./components/SecondApp";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "reactApp", element: <FirstApp /> },
  {
    path: "cSharpApp",
    element: <SecondApp />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
