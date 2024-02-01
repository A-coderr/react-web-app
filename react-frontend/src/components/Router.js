import Header from './Header'
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import ChatUI from './ChatUI';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import { useEffect, useState } from "react";

export default function Router(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

    const Layout = () => (
      <>
        <Header user={user}></Header>
        {/* <Login /> */}
        <Outlet></Outlet>
        <ChatUI></ChatUI>
      </>
    )

    const BrowserRouters = () => {
      
        return (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="contact-us" element={user ? <Contact />: <Navigate to="/login"/>}></Route>
                    <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}></Route>
                    <Route path="projects" element={user ? <Projects />: <Navigate to="/login"/>}></Route>
                    <Route path="projects/:id" element={<ProjectDetails />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>    
          );
    }

    return(
        <BrowserRouters></BrowserRouters>
    )
}