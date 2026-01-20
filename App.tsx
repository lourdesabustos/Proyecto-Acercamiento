
import React, { useState, useCallback, useEffect } from 'react';
import { SlideType, SlideData } from './types';
import Navigation from './components/Navigation';
import SlideRenderer from './components/SlideRenderer';
import Sidebar from './components/Sidebar';

const SLIDES: SlideData[] = [
  {
    id: 0,
    type: SlideType.TITLE,
    title: 'Estrategia de Cercanía Digital IMERYS',
    subtitle: 'Operación Santiago: Cerrando la brecha entre la gestión y el personal en planta.'
  },
  {
    id: 1,
    type: SlideType.PROBLEM,
    title: 'El Problema: La Brecha de Comunicación',
    content: [
      'Distancia física entre las oficinas centrales y la planta Santiago.',
      'Sensación de "abandono" percibida por el personal operativo.',
      'Canales de comunicación lentos o inexistentes en tiempo real.',
      'Dificultad para canalizar sugerencias o reclamos de forma anónima y segura.'
    ]
  },
  {
    id: 2,
    type: SlideType.SOLUTION_OVERVIEW,
    title: 'Solución Integral: Ecosistema Digital de 3 Capas',
    content: [
      { layer: 'Informativa', title: 'Cartelera Web', desc: 'Implementación en Common Play para transmisión en vivo.' },
      { layer: 'Escucha', title: 'Buzón Digital QR', desc: 'Formulario de consulta anónima integrado.' },
      { layer: 'Presencia', title: 'Presencia Física', desc: 'Instalación de tótems y stickers en mesas del comedor.' }
    ]
  },
  {
    id: 3,
    type: SlideType.DETAIL,
    title: 'Capa 1: Cartelera Web (Common Play)',
    subtitle: 'La ventana de la empresa en el comedor.',
    content: {
      features: [
        'Rotación automática de noticias de planta.',
        'Visualización de beneficios del mes.',
        'Reconocimiento a colaboradores destacado.',
        'Sincronización via URL de Vercel para actualización instantánea.'
      ],
      icon: 'fa-tv'
    }
  },
  {
    id: 4,
    type: SlideType.DETAIL,
    title: 'Capa 2: Buzón Digital QR',
    subtitle: 'Tu voz llega directamente a RRHH.',
    content: {
      features: [
        'Anonimato garantizado para fomentar la participación.',
        'Accesibilidad desde cualquier dispositivo móvil.',
        'Respuesta centralizada por el equipo de RRHH.',
        'Seguimiento de tendencias en preocupaciones del personal.'
      ],
      icon: 'fa-qrcode'
    }
  },
  {
    id: 5,
    type: SlideType.LOGISTICS,
    title: 'Logística de Implementación',
    content: [
      { step: 'Common Play', detail: 'Sincronización de la URL de Vercel para rotación en pantalla gigante.' },
      { step: 'Material POP', detail: 'Impresión de 20/30 stickers/carteles pequeños para las mesas del comedor.' },
      { step: 'Costo', detail: 'Inversión mínima en materiales de impresión. Software ya desarrollado.' }
    ]
  },
  {
    id: 6,
    type: SlideType.KPI,
    title: 'Indicadores de Éxito (KPIs)',
    content: [
      'Reducción del 30% en reclamos informales en el primer trimestre.',
      'Aumento en el índice de satisfacción en las encuestas de clima interno.',
      'Incremento en la participación de programas de beneficios.'
    ]
  },
  {
    id: 7,
    type: SlideType.MOCKUP,
    title: 'Diseño del Cartel para Mesas',
    subtitle: 'Diseño funcional para maximizar el escaneo.'
  },
  {
    id: 8,
    type: SlideType.TRACKING,
    title: 'Cuadro de Seguimiento de Proyecto',
    subtitle: 'Estado actual y próximos pasos.'
  }
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex h-screen w-full bg-slate-900 overflow-hidden relative">
      {/* Sidebar Overlay */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        slides={SLIDES} 
        currentIndex={currentSlide} 
        onSelect={goToSlide} 
      />

      <div className="flex-1 flex flex-col relative">
        {/* Header bar */}
        <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center text-white/40 pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
             <button 
               onClick={() => setSidebarOpen(true)}
               className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
             >
               <i className="fa-solid fa-bars"></i>
             </button>
             <span className="font-bold tracking-widest text-sm text-white/80">IMERYS SANTIAGO</span>
          </div>
          <div className="text-xs uppercase tracking-widest pointer-events-none">
            Estrategia de Cercanía Digital v1.0
          </div>
        </header>

        {/* Main Slide Content */}
        <main className="flex-1 flex items-center justify-center p-4 md:p-12 lg:p-24 overflow-hidden">
          <div className="w-full max-w-6xl aspect-video bg-white rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative flex items-center justify-center transition-all duration-500 transform scale-100 group">
             <SlideRenderer slide={SLIDES[currentSlide]} />
          </div>
        </main>

        {/* Navigation Controls */}
        <Navigation 
          current={currentSlide} 
          total={SLIDES.length} 
          onNext={nextSlide} 
          onPrev={prevSlide} 
        />
      </div>
    </div>
  );
}

export default App;
