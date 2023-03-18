import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import About from './views/About/About';
import Footer from './components/Footer/Footer';
import Adopt from './views/Adopt/Adopt';
import Contribute from './views/Contribute/Contribute';
import Services from './views/Services/Services';
import Donate from './views/Donate/Donate';
import Blog from './views/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Routes */}
          <Route path="/About">
            <Route path="Contact" element={<Services />}/>
            <Route path="Happy-Tails" element={<Adopt />}/>
            <Route path="" element={<About />}/>
            <Route path="*" element={<Navigate to="" />}/>
          </Route>

          <Route path="/Adopt" element={<Adopt />} />
          <Route path="/Blog">
            <Route path=":id" element={<BlogPost />} />
            <Route path=""  element={<Blog />} />
            <Route path="*"  element={<Navigate to="" />} />
          </Route>

          {/* Contribute Routes */}
          <Route path="/Contribute">
            <Route path="Volunteer" element={<About />} />
            <Route path="Foster" element={<Adopt />} />
            {/* below navigates to home Contribute Component */}
            <Route path="" element={<Contribute />} /> 
            {/* below is the wildcard component redirect */}
            <Route path="*" element={<Navigate to="" />} />
          </Route>

          {/* Services Routes */}
          <Route path="/Services">
            <Route path="Memorial"  element={<Donate />}></Route>
            <Route path=""  element={<Services />}></Route>
            <Route path="*"  element={<Navigate to="" />}></Route>
          </Route>

          <Route path="/Donate" element={<Donate />} />
          
          <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
