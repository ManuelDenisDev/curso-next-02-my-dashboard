import { PokemonCard, SimplePokemon } from '@/pokemons'

interface PokemonGridProps {
  pokemons: SimplePokemon[]
}

export function PokemonGrid({ pokemons }: PokemonGridProps) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-10'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
