import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PatientProvider } from './context/PatientContext';
import Header from './components/Header';
import Home from './pages/Home';
import Patients from './pages/Patients';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <PatientProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PatientProvider>
  );
}

export default App;