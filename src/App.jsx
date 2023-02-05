import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor/Cursor";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Cursor />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work/:title" element={<Work />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;