import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cafe from './pages/Cafe';
import Admin from './pages/Admin';
import Electrical from './pages/Electrical';
import Electrical2 from './pages/Electrical2';
import Medbay from './pages/Medbay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/electrical2" element={<Electrical2 />} />
        <Route path="/medbay" element={<Medbay />} />

      </Routes>
    </Router>
  );
};

export default App;
