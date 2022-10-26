import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import FicheLogement from './components/FicheLogement';
import Error404 from './components/404';
import APropos from './components/APropos';

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
