import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="px-8">
      <Navbar></Navbar>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
