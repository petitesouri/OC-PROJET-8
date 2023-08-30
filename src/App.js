import './styles/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Accueil from "./pages/Accueil";
import APropos from "./pages/Apropos";
import Logement from "./pages/Logement";
import Erreur from "./pages/Erreur404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Apropos" element={<APropos/>} />
          <Route path="/Logement" element={<Logement/>} />
          <Route path="*" element={<Erreur/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
