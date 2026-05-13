import { useState } from 'react'
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

const PASSWORD = 'wnst2025'  // ← change this to whatever you want

function PasswordGate({ onUnlock }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (input === PASSWORD) {
      onUnlock()
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        background: 'var(--white)',
        borderRadius: '16px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '380px',
        textAlign: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
          West Newton Safety Training
        </div>
        <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '2rem' }}>
          This site is currently under construction.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false) }}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '10px 14px',
              border: `1px solid ${error ? '#fca5a5' : 'var(--tan)'}`,
              borderRadius: '8px',
              fontSize: '15px',
              marginBottom: '0.75rem',
              background: error ? '#fef2f2' : 'var(--cream)',
              outline: 'none',
              fontFamily: 'var(--font-sans)'
            }}
            autoFocus
          />
          {error && (
            <p style={{ fontSize: '13px', color: '#b91c1c', marginBottom: '0.75rem' }}>
              Incorrect password. Try again.
            </p>
          )}
          <button type="submit" style={{
            width: '100%',
            background: 'var(--navy)',
            color: 'white',
            padding: '11px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)'
          }}>
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />

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