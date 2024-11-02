// Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Banking from "./components/banking";
import Bem from "./components/bem";
import ItDeveloper from "./components/itDeveloper";
import ItWayUp from "./components/itWayUp";
import Main from "./components/main";
import Map from "./components/map";
import Profile from "./components/profile";
import Results from "./components/results";
import ProfileLevel from "./components/profileLevel";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/bem" element={<Bem />} />
        <Route path="/itDeveloper" element={<ItDeveloper />} />
        <Route path="/itWayUp" element={<ItWayUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profileLevel" element={<ProfileLevel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
