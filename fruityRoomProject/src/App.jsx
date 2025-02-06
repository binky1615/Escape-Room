import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cafe from './pages/Cafe';
import CafeRun from './pages/CafeRun';
import Admin from './pages/Admin';
import Electrical from './pages/Electrical';
import Electrical2 from './pages/Electrical2';
import Medbay from './pages/Medbay';
import secret from './pages/SecretRoom';
import Storage from './pages/Storage';
import EndScreen from './pages/EndScreen';
import SecretRoom from './pages/SecretRoom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/caferun" element={<CafeRun />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/electrical2" element={<Electrical2 />} />
        <Route path="/medbay" element={<Medbay />} />
        <Route path="/secret" element={<SecretRoom />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/endscreen" element={<EndScreen />} />

      </Routes>
    </Router>
  );
};

export default App;
