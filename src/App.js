import './styles/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Accueil from "./pages/Accueil";
import APropos from "./pages/Apropos";
import Logement from "./pages/Logement";
import Erreur from "./pages/Erreur404";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />      
        <Routes>          
            <Route path="/" element={<Accueil/>} />
            <Route path="/Apropos" element={<APropos/>} /> 
            <Route path="/Logement/:id" element={<Logement/>} />                    
            <Route path="*" element={<Erreur/>} />
        </Routes>      
      <Footer />
    </BrowserRouter>
  );
}

export default App;