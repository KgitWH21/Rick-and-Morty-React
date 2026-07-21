import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <section className="simple-page">
      <p className="eyebrow">Dimension C-137</p>
      <h1>About the show</h1>
      <p>
        Rick and Morty is an animated sci-fi sitcom created by Justin Roiland
        and Dan Harmon, premiering on Adult Swim in December 2013. It follows
        Rick Sanchez, a cynical, alcoholic super-genius scientist, and his
        good-hearted but easily anxious grandson, Morty Smith, as they split
        their time between domestic life and interdimensional adventures.
      </p>
      <p>
        Beneath the wormholes, aliens, and mad science, the show is really
        about family — the Smith household has to make sense of a universe
        that doesn't care about them, with Rick's chaos constantly colliding
        with everyone else's attempts at a normal life. It mixes absurd
        science-fiction premises with sharp, dark comedy and a surprisingly
        emotional core.
      </p>
      <Link className="text-link" to="/">← Back through the portal</Link>
    </section>
  )
}

export default AboutPage
