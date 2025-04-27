import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
const routes = [{ id: 1, path: "/", element: <HomePage /> }];

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
