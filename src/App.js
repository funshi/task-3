import './App.css';
import Home from './pages/Home';
import Login from './pages/Loging';
import Register from './pages/Register';
import{BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyBucket from './pages/MyBucket';
import Edit from './pages/Edit';
import Add from './pages/Add';

function App() {
  return (
    <div>
      <Router>
         <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/Login" element={<Login />} /> 
           <Route path="/MyBucket" element={<MyBucket/>} />
           <Route path="/Add" element={<Add/>} />
           <Route path="/Edit" element={<Edit/>} />
           <Route path="/Register" element={<Register/>} />
         </Routes>
      </Router>
    </div> 
   
  );
}

export default App;
