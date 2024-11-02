// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Result from './components/Result';
import SittingArrangement from './components/SittingArrangement';
import AttendanceSheets from './components/AttendanceSheets';
import DateSheet from './components/DateSheet';

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-grow">
            <Header />
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/exam-department/result" element={<Result />} />
                <Route path="/exam-department/sitting-arrangement" element={<SittingArrangement />} />
                <Route path="/exam-department/attendance-sheets" element={<AttendanceSheets />} />
                <Route path="/exam-department/date-sheet" element={<DateSheet />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
