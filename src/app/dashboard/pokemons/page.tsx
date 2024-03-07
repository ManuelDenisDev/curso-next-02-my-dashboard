import { PokemonGridName, PokemonsResponse, SimplePokemon } from '@/pokemons'

export const metadata = {
  title: '151 Nombres Pokémons',
  description: 'Listado de los primeros 151 pokémons con sus nombres',
}

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (response) => response.json()
  )

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col'>
      <span className='my-2 text-5xl'>
        Listado de Pokémons <small className='text-blue-500'>NAME</small>
      </span>
      <PokemonGridName pokemons={pokemons} />
    </div>
  )
}
