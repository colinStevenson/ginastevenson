import useKeypress from 'react-use-keypress'
import { useState, useEffect } from 'react'
import {
  Link,
  useHistory,
  useParams
} from 'react-router-dom'

function FullScreen({
  images 
}) {

  const [isMounted, setIsMounted] = useState(false)
  const history = useHistory()
  let { imageIndex } = useParams()
  imageIndex = Number(imageIndex)
  const image = images[imageIndex]
  const next = imageIndex >= images.length - 1 ? 0 : imageIndex + 1
  const prev = imageIndex === 0 ? images.length - 1 : imageIndex -1

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    })
  }, [isMounted])

  useKeypress('Escape', () => {
    history.push('/')
  })
  useKeypress('ArrowLeft', () => {
    history.push(`/image/${prev}`)
  })
  useKeypress('ArrowRight', () => {
    history.push(`/image/${next}`)
  })

  return (
    <main className="main gallery-full-screen">
      <div className="container-fluid">
        <div className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link to={`/image/${prev}`} className="nav-link pl-0">
                Previous
              </Link>
            </li>
            <li>
              <Link to={`/image/${next}`} className="nav-link">
                Next
              </Link>
            </li>
          </ul>
          <Link to="/" className="close">
            <span aria-hidden="true">&times;</span>
          </Link>
        </div>
        <figure>
          <img src={image.default} alt="" />
        </figure>
      </div>
    </main>
  )
}

export default FullScreen
