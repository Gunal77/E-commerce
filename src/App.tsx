import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Savings from './pages/Savings';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/savings" element={< Savings />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
