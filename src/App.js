import './styles/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Accueil from "./pages/Accueil";
import APropos from "./pages/Apropos";
import Location from "./pages/Location";
import Erreur from "./pages/Erreur404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Apropos" element={<APropos/>} />
          <Route path="/Location" element={<Location/>} />
          <Route path="/erreur" element={<Erreur/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
