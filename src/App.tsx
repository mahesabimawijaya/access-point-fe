import { Route, Routes } from "react-router";
import Home from "@/components/pages/home";
import Network from "@/components/pages/network";
import Device from "@/components/pages/device";
import Config from "@/components/pages/config";
import Security from "@/components/pages/security";
import Notification from "@/components/pages/notification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/network" element={<Network />} />
      <Route path="/device" element={<Device />} />
      <Route path="/config" element={<Config />} />
      <Route path="/security" element={<Security />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}

export default App;
