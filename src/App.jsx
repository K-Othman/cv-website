
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe.jsx'
import './styles/global.css';
import ContactSection from './components/ContactSection.jsx'



export default function App(){
  return (
    <>
      <Header />
      <main role="main" className="container">
          <Home />
          <AboutMe />
          <Portfolio />
          <ContactSection />
      </main>
      <Footer />
    </>
  )
}
