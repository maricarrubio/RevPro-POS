import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/pos" element={<POSPage/>} />
        </Routes>
      </Router>

      
    </>
  )
}

export default App
