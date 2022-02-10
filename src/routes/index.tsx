import { BrowserRouter, Routes, Route } from "react-router-dom";
import BannerPage from "../components/Banner/Banner";
import { TogglePersona } from "../components/Buttons";

function RoutesComponet() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TogglePersona />} />
        <Route path="/banner" element={<BannerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponet;
