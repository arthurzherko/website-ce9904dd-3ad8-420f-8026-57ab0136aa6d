import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Silly } from "./pages/silly";
import { MoreSilly } from "./pages/more-silly";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/silly" element={<Silly />} />
    <Route path="/more-silly" element={<MoreSilly />} />
  </RouterRoutes>
);

export { Routes };