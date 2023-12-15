import React from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Section from './component/Section';
import Content from './component/content';
import Focus from './component/focus';
import Project from './component/project';
import ContactInfo from './component/contact-info';
import Footer from './component/footer';

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Section />
      <Content />
      <Focus />
      <Project />
      <ContactInfo />
      <Footer />
    </React.StrictMode>
  );
}

export default App;