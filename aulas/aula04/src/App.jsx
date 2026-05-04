import { Routes, Route } from 'react-router';

function App() {
  return  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
}

export default App;