import { PokemonCardName, SimplePokemon } from '@/pokemons'

interface PokemonGridProps {
  pokemons: SimplePokemon[]
}

export function PokemonGridName({ pokemons }: PokemonGridProps) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-10'>
      {pokemons.map((pokemon) => (
        <PokemonCardName key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
