import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './page/HomePage';
import PersonnagesPage from "./page/PersonnagesPage";
import PersonnageDetailPage from "./page/PersonnageDetailPage";
import RandomPersoPage from "./page/RandomPersoPage";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perso" element={<PersonnagesPage />} />
        <Route path="/detail/:persoId/perso" element={<PersonnageDetailPage />} />
        <Route path="/persorandom" element={<RandomPersoPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
