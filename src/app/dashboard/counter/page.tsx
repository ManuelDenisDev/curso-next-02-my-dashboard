import { CartCounter } from '@/app/shopping-cart'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador',
}

export default function CounterPage() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  )
}
