'use client'

import { IoCarOutline, IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'

export function WidgetsGrid() {
  const isCart = useAppSelector((state) => state.counter.count)

  return (
    <div className='flex flex-wrap p-2'>
      <SimpleWidget
        title={`${isCart}`}
        subtitle='Productos agregados'
        label='Contador'
        icon={<IoCartOutline size={70} className='text-blue-500' />}
        href='/dashboard/counter'
      />
    </div>
  )
}
