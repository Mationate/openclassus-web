"use client"
import React, { useEffect, useRef } from 'react'

export default function Target() {
    const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src="/assets/tabletop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          ¿Para quién es <span className="text-yellow-400">NOT A GAME</span>?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg">
            <p className="text-xl font-semibold mb-4">
            <span className="text-yellow-400">NOT A GAME</span> está diseñado para facilitadores de técnicas que buscan enriquecer sus talleres y sesiones de formación. Ideal para:
            </p>
            <ul className="space-y-3">
              {['Consultores', 'Relatores', 'Docentes', 'Lideres Organizacionales', 'Innovadores', 'Emprendedores', 'Coaches', 'Mentores', 'Inconformistas'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg">
            <p className="text-xl font-semibold mb-4">
              Que puedes hacer con <span className="text-yellow-400">NOT A GAME</span>:
            </p>
            <ul className="space-y-3">
              {['Talleres de Liderazgo y de Resolución de Conflictos', 'Sesiones de trabajo en Equipo', 'Gestión del Cambio', 'Innovación', 'Estrategia', 'Transformación Digital', 'Desarrollo Personal', 'Creatividad', 'Adaptabilidad'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
       
      </div>
    </div>
  )
}