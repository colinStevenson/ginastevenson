import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'

const COLUMNS_BY_BREAKPOINT = {
  default: 5,
  992: 3,
  576: 1
}

function Gallery({ images }) {

  const renderGrid = () => {
    return (
      <Masonry
        className="gallery"
        columnClassName="gallery-column"
        breakpointCols={COLUMNS_BY_BREAKPOINT}
      >
        {
          images.map((image, index) =>
            <Link to={`/image/${index}`} key={index}>
              <figure
                role="button"
              >
                <img className="img-fluid" src={image.default} alt="" />
              </figure>
            </Link>
          )
        }
      </Masonry>
    )
  }


  return (
    <section
      id="gallery"
      className="card"
    >
      <div className="container-fluid">
        { renderGrid() }
      </div>
    </section>
  )
}

export default Gallery
