import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Statement from './Statement'

function Home({ images }) {
  return (
    <main className="main offset-header">
      <Gallery images={ images } />
      <About />
      <Statement />
      <Contact />
    </main>
  )
}

export default Home
