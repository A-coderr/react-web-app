import Header from './Header'
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import ChatUI from './ChatUI';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

export default function Router(){
    const user = false;
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
                    <Route path="/" element={user ? <Home />: <Navigate to="/login"/>}></Route>
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