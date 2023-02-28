import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Create from "./Pages/Create";
import DashBoard from "./Pages/DashBoard";
import Profile from "./Pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={ <DashBoard/> } />
      <Route path="create" element={ <Create/> } />
      <Route path="profile" element={ <Profile/> } />
    </Route>
  )
);

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
