
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detection from './components/Detection';
import About from './components/About';
import History from './components/History';
import AddPatient from './components/AddPatient';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fcfdfe]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detect" element={<Detection />} />
            <Route path="/history" element={<History />} />
            <Route path="/add-patient" element={<AddPatient />} />
          </Routes>
        </main>
        
        <footer className="py-12 px-6 text-center border-t border-slate-100 bg-white/50 space-y-2">
          <p className="text-slate-400 text-[11px] font-medium tracking-tight">
            © 2026 V-Vision Medical Systems. For clinical assessment assistance only.
          </p>
          <p className="text-black text-sm font-bold">
            Developed by Vrushali Mahalle
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
