import Image from 'next/image'
import AprendizajeMap from '@/public/assets/APRENDIZAJE.svg';

export const Map = () => {
  return (
    <div id='map' className="mx-auto p-16 bg-zinc-900 text-white">
        <Image src={AprendizajeMap} className='rounded-md' alt="Map" />
    </div>
  )
}
