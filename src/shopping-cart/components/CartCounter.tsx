'use client'

import { useState } from 'react'

interface CartCounterProps {
  value?: number
}

export function CartCounter({ value = 0 }: CartCounterProps) {
  const [count, setCount] = useState(value)

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex gap-2'>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
          className='flex w-[100px] items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600'>
          +1
        </button>
        <button
          onClick={() => {
            setCount(count - 1)
          }}
          className='flex w-[100px] items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600'>
          -1
        </button>
      </div>
    </>
  )
}
