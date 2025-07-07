import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Toaster} from "@/components/ui/toaster";
import MouseGlow from "./components/MouseGlow";

function App() {
  return (
    <>
    <MouseGlow />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  );
}

export default App;
