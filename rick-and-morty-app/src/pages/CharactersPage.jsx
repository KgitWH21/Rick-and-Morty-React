import { useEffect, useState } from "react"
import axios from 'axios'

function CharactersPage() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  
  useEffect(() => {
    async function fetchCharacters() {
      try {
        let allCharacters = []
        let url = 'https://rickandmortyapi.com/api/character'

        while (url) {
          const response = await axios.get(url)
          allCharacters = [...allCharacters, ...response.data.results]
          url = response.data.info.next
        }
        setCharacters(allCharacters)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }

    }

    fetchCharacters()
  }, [])
  
  if (loading) return <p>Loading characters...</p>
  if (error) return <p>Error: {error}</p>


  return (
    <section>
      <h1>Characters</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name}/>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CharactersPage
