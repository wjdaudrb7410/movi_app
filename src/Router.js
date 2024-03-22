import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Error404 } from "./pages/Error404";
import { Ex } from "./pages/Ex";
import { Header } from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/ex" element={<Ex />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
