'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, subtractOne, initCounterState } from '@/store/counter/counterSlice'
import { useEffect } from 'react'

interface CartCounterProps {
  value?: number
}

export interface CounterResponse {
  method: string
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json())
  console.log({ data })

  return data
}

export function CartCounter({ value = 0 }: CartCounterProps) {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])

  return (
    <>
      <span className='text-9xl'>{count}</span>
      <div className='flex gap-2'>
        <button
          onClick={() => {
            dispatch(addOne())
          }}
          className='flex w-[100px] items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600'>
          +1
        </button>
        <button
          onClick={() => {
            dispatch(subtractOne())
          }}
          className='flex w-[100px] items-center justify-center rounded-xl bg-gray-900 p-2 text-white transition-all hover:bg-gray-600'>
          -1
        </button>
      </div>
    </>
  )
}
