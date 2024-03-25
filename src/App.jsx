import React from 'react';
import { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home'
import About from './views/about/About';
// import Home from '/';
import Archive from './views/archive/Archive';
import Header from './components/header/Header';
import NoMatch from './views/nomatch/NoMatch';
import Footer from './components/footer/Footer';
// import Contact from './components/contact/Contact';
import Frontend from './components/project-frontend/Frontend';
import ProjectGraphic from './components/project-graphic/ProjectGraphic';
import { useLocation } from "react-router-dom";
import Books from './views/books/Books';
import LivePage from './views/live/Live';
import Weliving from './views/weliving/Weliving';
import Caudalie from './views/caudalie/Caudalie';
import Growth from './views/growth/Growth';
import Navarro from './views/navarro/Navarro';




function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>
	<Header></Header> 
	<main>
  
			<Routes>
				
        <Route path="/" element={<Home />} />
				
        <Route path='/frontend/:id' element={<Frontend />}/>
        
        <Route path='/graphic-design/:id' element={<ProjectGraphic />}/>

        
        <Route path="/growth" element={<Growth />} />
        <Route path="/navarro" element={<Navarro />} />

        <Route path="/live" element={<LivePage />} />

        <Route path="/weliving" element={<Weliving />} />

        <Route path="/caudalie" element={<Caudalie />} />
				
        <Route path="/about" element={<About />} />
				
        <Route path="/archive" element={<Archive />} />

        <Route path="/books" element={<Books />} />
        
        <Route path="*" element={<NoMatch />} />

      </Routes>
	</main>
  {/* <Contact></Contact> */}
  <Footer></Footer>
</>;
}

export default App;
