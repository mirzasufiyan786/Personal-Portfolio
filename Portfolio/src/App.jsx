import React from 'react';
import About from "./components/About";
import SideNavBAr from "./components/SideNavBAr";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ALLPortfolio from "./components/ALLPortfolio";
import AppCard from "./components/AppCard";
import BookCard from "./components/BookCard";
import ProductCard from "./components/ProductCard";
import Brandingcard from "./components/Brandingcard";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import CardWithArrow from './components/Cardarow'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from './components/Contact';
import Onplus from './components/Onplus';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <SideNavBAr />
      <About />
      <Resume />
      <Portfolio />
      <AnimatedRoutes />
      <Services />
      <Testimonials />
      <Contact/>
      <Footer/>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={400}
      >
        <Routes location={location}>
          <Route path="/" element={<ALLPortfolio />} />
          <Route path="/app" element={<AppCard />} />
          <Route path="/book" element={<BookCard />} />
          <Route path="/branding" element={<Brandingcard />} />
          <Route path="/product" element={<ProductCard />} />
  </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
