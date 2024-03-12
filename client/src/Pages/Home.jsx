import Nav from '../components/Nav'
import Header from '../components/Header'
import Contact from '../components/Contact'
import List from '../components/List'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Price from '../components/Price'
import SubscribeForm from '../components/SubscribeForm'
import About from '../components/About'


function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <List />
      <Contact />
      <Price />
      <SubscribeForm />
      <Testimonials />
      <Footer />
      
      {/* Ancla para subir */}
      <nav className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        <a href="#header">Subir</a>
      </nav>
    </>
  );
}

export default App;