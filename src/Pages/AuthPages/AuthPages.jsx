import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar } from '../../Components/Navbar/Navbar'
import { LoginForm } from '../../Components/LoginForm/LoginForm';
import { RegisterForm } from '../../Components/RegisterForm/RegisterForm';

export const AuthPages = () => {
    const { isUserLoggedIn, userName } = useSelector((state) => state.auth);
    return (
        <div>
            <Navbar isUserLoggedIn={isUserLoggedIn} userName={userName} />
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<RegisterForm />} />
            </Routes>
        </div>
    )
}
