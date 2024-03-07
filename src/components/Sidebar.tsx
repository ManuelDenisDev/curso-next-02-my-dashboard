import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from '@/components/SidebarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualizacion',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokemon',
    icon: <IoFootball size={40} />,
    title: 'Pokemon',
    subtitle: 'Generados por ID',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Generados por NAME',
  },
]

export function Sidebar() {
  return (
    <div
      id='menu'
      style={{ width: '25rem' }}
      className='left-0 z-10 min-h-screen w-64 overflow-y-scroll bg-gray-900 text-slate-300'>
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center gap-2 text-lg font-bold text-white md:text-2xl'>
          <IoLogoReact />
          <span>
            ManDen<span className='text-blue-500'>Dev</span>.
          </span>
        </h1>
        <p className='text-sm text-slate-500'>2 proy. del curso de Next</p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Bienvenido de nuevo,</p>
        <a href='#' className='inline-flex items-center space-x-2'>
          <span>
            <Image
              className='h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80'
              alt='User avatar'
              width={50}
              height={50}
            />
          </span>
          <span className='text-sm font-bold md:text-base'>Manuel Denis</span>
        </a>
      </div>
      <div id='nav' className='w-full px-6'>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
