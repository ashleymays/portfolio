import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor/Cursor";
import Home from './pages/Home';
import About from './pages/About';
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Cursor />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;