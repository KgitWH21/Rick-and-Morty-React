import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './NavBar.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Container className="py-4">
          {/* outlet is replaced by matching child route from router.jsx*/}
          <Outlet />
        </Container>
      </main>
    </div>
  )
}

export default App


