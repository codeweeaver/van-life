import "./server";

import { BrowserRouter, Route, Routes } from "react-router";
import HostLayout from "./layouts/HostLayout.jsx";
import Layout from "./layouts/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import HostVanDetails from "./pages/host/HostVanDetails.jsx";
import HostVanInfo from "./pages/host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/host/HostVanPricing.jsx";
import HostVans from "./pages/host/HostVans.jsx";
import Income from "./pages/host/Income.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import VanDetail from "./pages/vans/VanDetail.jsx";
import Vans from "./pages/vans/Vans.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />{" "}
            <Route path="vans/:id" element={<HostVanDetails />}>
              {" "}
              <Route index element={<HostVanInfo />} />{" "}
              <Route path="pricing" element={<HostVanPricing />} />{" "}
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
