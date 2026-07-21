import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section>
      <p className="eyebrow">404: Wrong dimension</p>
      <h1>Nothing lives here.</h1>
      <Link className="text-link" to="/">Return home</Link>
    </section>
  )
}

export default NotFoundPage
