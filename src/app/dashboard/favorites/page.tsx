import { PokemonGrid } from '@/pokemons'

export const metadata = {
  title: 'Favoritos',
  description: 'Listado de ¡Pokémons favoritos!',
}

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col'>
      <span className='my-2 text-5xl'>
        Pokémons favoritos <small className='text-blue-500'>Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  )
}
