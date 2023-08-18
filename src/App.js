import './styles/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Error from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
