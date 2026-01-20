
import React, { useState, useCallback, useEffect } from 'react';
import { SlideType, SlideData } from './types.ts';
import Navigation from './components/Navigation.tsx';
import SlideRenderer from './components/SlideRenderer.tsx';
import Sidebar from './components/Sidebar.tsx';

const SLIDES: SlideData[] = [
  {
    id: 0,
    type: SlideType.TITLE,
    title: 'Estrategia de Cercanía Digital IMERYS',
    subtitle: 'Propuesta para Dirección: Erradicando el "RRHH no existe" mediante la Interactividad Total.'
  },
  {
    id: 1,
    type: SlideType.PROBLEM,
    title: 'El Problema: La Brecha de Comunicación',
    content: [
      'Distancia física entre gestión y planta.',
      'Sensación de abandono y falta de apoyo.',
      'Canales obsoletos que no llegan al operario.',
      'Necesidad de transparencia en procesos de Santiago.'
    ]
  },
  {
    id: 2,
    type: SlideType.SOLUTION_OVERVIEW,
    title: 'Solución Integral: Ecosistema de 3 Capas',
    content: [
      { layer: 'Informativa', title: 'Cartelera Digital', desc: 'Common Play en el comedor para noticias en vivo.' },
      { layer: 'Interactiva', title: 'Canal de Escucha Directa', desc: 'Seguro, rápido y anónimo mediante QR en mesas.' },
      { layer: 'Gestión', title: 'Oficina Virtual 24/7', desc: 'Estatus de trámites y beneficios en tiempo real.' }
    ]
  },
  {
    id: 3,
    type: SlideType.DETAIL,
    title: 'Etapa 1: Canal de Escucha Directa',
    subtitle: 'Seguro, rápido y totalmente anónimo.',
    content: {
      features: [
        'Buzón digital con cifrado de identidad.',
        'Consultas sobre el Convenio Colectivo.',
        'Reporte de estado de entrega de EPP.',
        'Acceso instantáneo desde el QR en la mesa.'
      ],
      icon: 'fa-shield-halved'
    }
  },
  {
    id: 4,
    type: SlideType.INTERACTIVE_PREVIEW,
    title: 'Etapa 2: Módulos de Interactividad Total',
    subtitle: 'Nuevas herramientas para el empoderamiento del personal.',
    content: {
      urna: { title: 'Urna de Cristal', progress: 65, status: 'En Proceso de Compra' },
      kudos: { count: 12, latest: '¡Gracias Juan por el apoyo en la carga!' },
      menu: ['Pastel de Papas', 'Ensalada Mixta', 'Fruta de Estación']
    }
  },
  {
    id: 5,
    type: SlideType.LOGISTICS,
    title: 'Logística de Implementación',
    content: [
      { step: 'Common Play', detail: 'Sincronización de URL para rotación automática en TV comedor.' },
      { step: 'QR en Mesas', detail: 'Instalación de 30 stickers con "Llamado de Auxilio" integrado.' },
      { step: 'Presencia Física', detail: 'Tótems informativos en puntos clave de la operación.' }
    ]
  },
  {
    id: 6,
    type: SlideType.KPI,
    title: 'Indicadores de Éxito',
    content: [
      'Erradicación de comentarios negativos sobre la ausencia de RRHH.',
      'Aumento en la participación de encuestas de clima regional.',
      'Mejora en los tiempos de respuesta a dudas de planta.'
    ]
  },
  {
    id: 7,
    type: SlideType.MOCKUP,
    title: 'Diseño para las Mesas (QR)',
    subtitle: '¿Almorzando con una buena idea? Tu opinión es el motor.'
  },
  {
    id: 8,
    type: SlideType.TRACKING,
    title: 'Seguimiento del Proyecto',
    subtitle: 'Control de hitos y requerimientos técnicos.'
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
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        slides={SLIDES} 
        currentIndex={currentSlide} 
        onSelect={goToSlide} 
      />

      <div className="flex-1 flex flex-col relative">
        <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center text-white/40 pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
             <button 
               onClick={() => setSidebarOpen(true)}
               className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white"
             >
               <i className="fa-solid fa-bars"></i>
             </button>
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">IM</div>
                <span className="font-bold tracking-widest text-sm text-white/80">IMERYS SANTIAGO</span>
             </div>
          </div>
          <div className="text-xs uppercase tracking-widest pointer-events-none">
            Estrategia de Cercanía Digital v1.1
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 md:p-12 lg:p-24 overflow-hidden">
          <div className="w-full max-w-6xl aspect-video bg-white rounded-3xl shadow-2xl shadow-black/40 overflow-hidden relative flex items-center justify-center transition-all duration-500 transform scale-100 group">
             <SlideRenderer slide={SLIDES[currentSlide]} />
          </div>
        </main>

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
