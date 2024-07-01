import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthService from "./appwrite/auth.js";
import { login, logout } from "./store/authslice.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    AuthService.getCorrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>  
        Todo  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
