import { Sidebar } from '@/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-screen w-screen overflow-y-scroll bg-slate-100 text-slate-300 antialiased selection:bg-blue-600 selection:text-white'>
      <div className='flex'>
        <Sidebar />
        <div className='w-full text-slate-900'>
          <main className='flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]'>
            <h1 className='text-9xl font-extrabold tracking-widest text-white'>404</h1>
            <div className='absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm'>Pagina no encontrada</div>
            <button className='mt-5'>
              <div className='group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500'>
                <span className='absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>

                <span className='relative block border border-current bg-[#1A2238] px-8 py-3'>
                  <Link href='/'>Ir a Inicio</Link>
                </span>
              </div>
            </button>
          </main>
        </div>
      </div>
    </div>
  )
}
