import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import Notification from "@/pages/notification";
import Network from "@/pages/network";
import Device from "@/pages/device";
import Config from "@/pages/config";
import Security from "@/pages/security";
import Login from "@/pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/network" element={<Network />} />
      <Route path="/device" element={<Device />} />
      <Route path="/config" element={<Config />} />
      <Route path="/security" element={<Security />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
