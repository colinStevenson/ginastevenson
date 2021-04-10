import useKeypress from 'react-use-keypress'
import { useState, useEffect } from 'react'

function FullScreen({
  handleClose,
  advanceImage,
  image 
}) {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    })
  }, [isMounted])

  useKeypress('Escape', () => {
    handleClose()
  })
  useKeypress('ArrowLeft', () => {
    advanceImage(-1)
  })
  useKeypress('ArrowRight', () => {
    advanceImage(1)
  })

  return (
    <div className={ `gallery-full-screen ${isMounted ? 'in' : ''}`}>
      <div className="container-fluid">
        <div className="navbar">
          <div className="btn-group">
            <button className="btn btn-link pl-0" onClick={() => {advanceImage(-1)}}>
              Previous
            </button>
            <button className="btn btn-link" onClick={() => {advanceImage(1)}}>
              Next
            </button>
          </div>
          <button
            className="close"
            aria-label="Close" 
            type="button"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <figure>
          <img src={image.default} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default FullScreen
