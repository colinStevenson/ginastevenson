import './style/App.scss'
import AppHeader from './compoonents/AppHeader.jsx'
import About from './compoonents/About'
import Contact from './compoonents/Contact'
import Gallery from './compoonents/Gallery'
import Statement from './compoonents/Statement'
import smoothscroll from 'smoothscroll-anchor-polyfill'
import { useState } from 'react'

smoothscroll.polyfill()

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false)
  return (
    <div className={`App ${isFullScreen ? 'full-screen' : ''}`}>
      <AppHeader isFullScreen={ isFullScreen } />
      <main className="offset-header">
        <Gallery handleFocus={ setIsFullScreen} />
        <About />
        <Statement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
