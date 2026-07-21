import { Link } from "react-router-dom"

function HomePage() {
  return (
    <section>
      <div>
        <span>WUBBA<br/>LUBBA<br/>DUB DUB!</span>
      </div>
      <div>
        <p className="eyebrow">Infinite universes.</p>
        <h1>Jump into the portal</h1>
        <p className="intro">Join a reckless genius and his anxious grandson for the smartest, strangest adventures in the multiverse.
        </p>
        {/*Link enabled by react-router-dom */}
        <Link className="button" to="/about">Why watch?</Link>
      </div>
    </section>
  )
}

export default HomePage



