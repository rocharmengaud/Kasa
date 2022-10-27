import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import FicheLogement from './pages/FicheLogement';
import Error404 from './pages/404';
import APropos from './pages/APropos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
