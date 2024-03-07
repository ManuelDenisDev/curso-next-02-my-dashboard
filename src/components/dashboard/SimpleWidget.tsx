import Link from 'next/link'

interface SimpleWidgetProps {
  title: string
  subtitle?: string
  label?: string
  icon?: React.ReactNode // puede ser tb JSX.Element pero con React.ReactNode puede ser uno o varios elementos
  href?: string
}

export const SimpleWidget = ({ title, subtitle, label, icon, href }: SimpleWidgetProps) => {
  return (
    <div className='border-1 mx-2 my-2 min-w-full rounded-2xl border-gray-50  bg-white p-3 shadow-xl sm:min-w-[25%]'>
      <div className='flex flex-col'>
        {label && (
          <div>
            <h2 className='text-center font-bold text-gray-600'>{label}</h2>
          </div>
        )}
        <div className='my-3'>
          <div className='flex flex-row items-center justify-center space-x-1 '>
            {icon}
            <div id='temp' className='text-center'>
              <h4 className='text-4xl'>{title}</h4>
              {subtitle && <p className='text-xs font-light text-gray-500'>{subtitle}</p>}
            </div>
          </div>
        </div>
        {href && (
          <div className='mt-2 w-full place-items-end border-t-2 border-gray-100 text-right'>
            <Link href={href} className='text-xs font-medium text-indigo-600'>
              Más
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
