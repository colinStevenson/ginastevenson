import './style/App.scss'
import AppHeader from './compoonents/AppHeader.jsx'
import About from './compoonents/About'
import Contact from './compoonents/Contact'
import Gallery from './compoonents/Gallery'
import Statement from './compoonents/Statement'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="offset-header">
        <Gallery />
        <About />
        <Statement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
