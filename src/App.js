import './style/App.scss'
import AppHeader from './compoonents/AppHeader.jsx'
import About from './compoonents/About'
import Contact from './compoonents/Contact'
import Portfolio from './compoonents/Portfolio'
import Statement from './compoonents/Statement'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Portfolio />
        <About />
        <Statement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
