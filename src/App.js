import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';
import LeaveMangement from './pages/LeaveMangement';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/employeeForm' exact component={EmployeeForm} />
        <Route path='/leaveManagement' exact component={LeaveMangement} />
        <Route path='/team' exact component={Team} />
        <Route path='/messages' exact component={Messages} />
        <Route path='/support' exact component={Support} />

        
      </Routes>
    </Router>
  );
}

export default App;
