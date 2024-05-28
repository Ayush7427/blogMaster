import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header, Loader } from './components';
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <Header />
      <main className="min-h-screen w-full pb-7 bg-white ">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center"
        reverseOrder={false} />
    </>
  ) : (
    <Loader />
  );
}

export default App