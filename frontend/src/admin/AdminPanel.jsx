import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contact from './Contact';
import CustomerOpinion from './CustomerOpinion';
import Products from './Products';
import SideBar from './SideBar';
import LoginPage from './LoginPage';
import Welcome from './Welcome';

const AdminPanel = () => {
  const [admin, setAdmin] = useState(null);

  const getAdmin = ()=>{
    const storedAdmin = localStorage.getItem('adminToken');
    if (storedAdmin) {
      setAdmin(storedAdmin);
    }
  }
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <div className="flex sm:flex-row flex-col">

      {admin && <SideBar setAdmin={setAdmin}/>}
      <div className="flex-grow sm:p-4 ">
        <Routes>

          {!admin ? (
            <Route path="*" element={<Navigate to="/" replace />} />
          ) : (
            <>
              <Route path="/" element={<Welcome />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customeropinion" element={<CustomerOpinion />} />
            </>
          )}
          <Route path="/" element={<LoginPage getAdmin={getAdmin}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
