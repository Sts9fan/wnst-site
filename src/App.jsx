import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import BookPage from './pages/BookPage.jsx'
import IntakePage from './pages/IntakePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/courses"  element={<CoursesPage />} />
          <Route path="/book"     element={<BookPage />} />
          <Route path="/intake"   element={<IntakePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/faq"      element={<FaqPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}