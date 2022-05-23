import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar } from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import { About } from '../About'
import { Home } from '../Home/Home'

export const Dashboard = () => {
    const { isUserLoggedIn, userName } = useSelector((state) => state.auth);
    return (
        <div>
            <Navbar isUserLoggedIn={isUserLoggedIn} userName={userName} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}
