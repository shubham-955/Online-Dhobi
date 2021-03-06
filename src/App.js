import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Loading } from './Components/Loading/Loading';
import { Profile } from './Pages/Profile/Profile';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { AuthPages } from './Pages/AuthPages/AuthPages';

function App() {

  const loading = useSelector((state) => state.load.loading);

  if (loading) return <Loading />

  return (
    <div className='container'>
      <Routes>
        <Route index path="/*" element={<Dashboard />} />
        <Route index path="/auth*" element={<AuthPages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
