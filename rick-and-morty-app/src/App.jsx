import { Outlet, NavLink, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <a>RICK AND MORTY</a>
        <nav>
          <NavLink as={Link} to="/">Home</NavLink>
          <NavLink as={Link} to="/about">About</NavLink>
          <NavLink as={Link} to="/characters">Characters</NavLink>
        </nav>
        <main>
          {/* outlet is replaced by matching child route from router.jsx*/}
          <Outlet />
        </main>
      </header>
    </div>
  )
}

export default App


