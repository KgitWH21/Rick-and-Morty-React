import { useParams } from "react-router-dom"

function CharacterDetailsPage() {
  const { id } = useParams()

  return (
    <section>
      <h1>Character #{id}</h1>
    </section>
  )
}

export default CharacterDetailsPage
