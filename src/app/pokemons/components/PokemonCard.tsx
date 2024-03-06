import Link from 'next/link'
import { SimplePokemon } from '@/app/pokemons'
import Image from 'next/image'
import { IoHeartOutline } from 'react-icons/io5'

interface PokemonCardProps {
  pokemon: SimplePokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const { id, name } = pokemon

  return (
    <div className='right-0 mx-auto mt-2 w-60'>
      <div className='overflow-hidden rounded bg-white shadow-lg'>
        <div className='flex flex-col items-center justify-center border-b bg-gray-800 p-6 text-center'>
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
          <p className='pt-2 text-lg font-semibold capitalize text-gray-50'>{name}</p>
          <div className='mt-5'>
            <Link
              href={`/dashboard/pokemon/${id}`}
              className='rounded-full border px-4 py-2 text-xs font-semibold text-gray-100'>
              Mas información
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <Link href='/dashboard/main' className='flex px-4 py-2 hover:bg-gray-100'>
            <div className='text-red-600'>
              <IoHeartOutline />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium leading-none text-gray-800'>No es favorito</p>
              <p className='text-xs text-gray-500'>View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
