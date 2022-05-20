import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About'
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { useSelector } from "react-redux";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  return (
    <div className='container'>
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
