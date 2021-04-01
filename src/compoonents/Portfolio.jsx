function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../portfolio', false, /\.(jpe?g)$/));

function Gallery() {
  return (
    <section className="card" id="gallery">
      <div className="container-fluid">
        <div className="gallery">
          {
            images.map(image => 
              <div><img className="img-fluid" src={image.default} alt="" /></div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery