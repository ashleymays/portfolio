import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Error from "./pages/Error/Error";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:title" element={<Work />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
