import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../../Component/Profile/Profile';
import Link from '../../Component/Link/Link';
import Footer from '../../Component/Footer/Footer';

function Home() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route 
            </Routes>
        </BrowserRouter>
        <Profile />
        <Link />
        <Footer />
    </div>
  )
}

export default Home