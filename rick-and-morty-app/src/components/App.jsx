import { Outlet, NavLink, Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'

function App() {
  return (
    <div>
      <header>
        <a>RICK AND MORTY</a>
          <NavBar />
        <main>
          {/* outlet is replaced by matching child route from router.jsx*/}
          <Outlet />
        </main>
      </header>
    </div>
  )
}

export default App


