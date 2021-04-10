import Masonry from 'react-masonry-css'
import FullScreen from './FullScreen'
import { useState } from 'react'

function importAll(r) {
  return r.keys().map(r);
}

const COLUMNS_BY_BREAKPOINT = {
  default: 5,
  992: 3,
  576: 1
}

const images = importAll(require.context('../portfolio', false, /\.(jpe?g)$/));

function Gallery({ handleFocus }) {

  const [focussedImage, setFocussedImage] = useState(null)
  const handleFullScreenClose = () => {
    setFocussedImage(null)
    handleFocus(false)
  }
  const handleFigureClick = (index) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setFocussedImage(index)
    handleFocus(true)
  }
  const handleImageNavigation = (advanceBy) => {
    if (focussedImage !== null) {
      let newIndex = focussedImage + advanceBy
      if (newIndex < 0) {
        newIndex = images.length - 1
      }
      if (newIndex >= images.length) {
        newIndex = 0
      }
      setFocussedImage(newIndex)
    } 
  }

  const renderGrid = () => {
    return (
      <Masonry
        className={ `gallery ${focussedImage !== null ? 'focussed' : ''}`}
        columnClassName="gallery-column"
        breakpointCols={COLUMNS_BY_BREAKPOINT}
      >
        {
          images.map((image, index) => 
            <figure
              key={index}
              onClick={ () => { handleFigureClick(index) }}
              role="button"
            >
              <img className="img-fluid" src={image.default} alt="" />
            </figure>
          )
        }
      </Masonry>
    )
  }

  const renderFull = () => {
    return (
      <FullScreen
        image={images[focussedImage]}
        advanceImage={handleImageNavigation}
        handleClose={handleFullScreenClose}
      />
    )
  }

  return (
    <section
      id="gallery"
      className="card"
    >
      <div className="container-fluid">
        { renderGrid() }
        { focussedImage !== null ? renderFull() : '' }
      </div>
    </section>
  )
}

export default Gallery
