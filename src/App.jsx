import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import POSPage from './pages/POSPage';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/pos" element={<POSPage/>} />
        </Routes>
      </Router>

      
    </>
  )
}

export default App
