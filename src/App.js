import './style/App.scss'
import AppHeader from './components/AppHeader'
import smoothscroll from 'smoothscroll-anchor-polyfill'
import FullScreen from './components/FullScreen'
import Home from './components/Home'
import {
  useRef
} from 'react'
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

const importAll = (r) => {
  return r.keys().map(r);
}
const images = importAll(require.context('./portfolio', false, /\.(jpe?g)$/))

const getRouteKey = pathname => {
  return pathname.replace(/[0-9]/g, '')
}

smoothscroll.polyfill()

function App() {
  let location = useLocation()
  const nodeRef = useRef(null)
  return (
    <div ref={nodeRef}>
      <AppHeader />
      <TransitionGroup>
        <CSSTransition
          key={getRouteKey(location.pathname)}
          classNames="fade"
          nodeRef={nodeRef}
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path="/">
              <Home images={images} />
            </Route>
            <Route path="/image/:imageIndex">
              <FullScreen
                images={ images }
              />
            </Route>
          </Switch>
          </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App;
