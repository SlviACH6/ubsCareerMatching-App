// Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Banking from "./components/banking";
import Bem from "./components/bem";
import It from "./components/it";
import ItWayUp from "./components/itWayUp";
import Main from "./components/main";
import Map from "./components/map";
import Profile from "./components/profile";
import Results from "./components/results";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/bem" element={<Bem />} />
        <Route path="/it" element={<It />} />
        <Route path="/itWayUp" element={<ItWayUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
