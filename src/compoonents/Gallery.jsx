import Masonry from 'react-masonry-css'

function importAll(r) {
  return r.keys().map(r);
}

const COLUMNS_BY_BREAKPOINT = {
  default: 5,
  992: 3,
  576: 1
}

const images = importAll(require.context('../portfolio', false, /\.(jpe?g)$/));

function Gallery() {
  return (
    <section className="card" id="gallery">
      <div className="container-fluid">
        <Masonry
          className="gallery"
          columnClassName="gallery-column"
          breakpointCols={COLUMNS_BY_BREAKPOINT}
        >
          {
            images.map((image, index) => 
              <figure key={index}><img className="img-fluid" src={image.default} alt="" /></figure>
            )
          }
        </Masonry>
      </div>
    </section>
  )
}

export default Gallery
