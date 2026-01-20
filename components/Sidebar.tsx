
import React from 'react';
import { SlideData } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, slides, currentIndex, onSelect }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed inset-y-0 left-0 w-80 bg-slate-900 z-50 transform transition-transform duration-300 shadow-2xl border-r border-white/10 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">Índice</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-6">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => onSelect(i)}
              className={`w-full px-8 py-4 flex items-start gap-4 transition-colors group ${i === currentIndex ? 'bg-blue-600/20 text-blue-400' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${i === currentIndex ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/40 group-hover:bg-white/20'}`}>
                {i + 1}
              </span>
              <div className="text-left">
                <div className="font-bold text-sm leading-tight">{slide.title}</div>
                {slide.subtitle && <div className="text-xs opacity-50 mt-1 line-clamp-1">{slide.subtitle}</div>}
              </div>
            </button>
          ))}
        </div>
        <div className="p-8 border-t border-white/10 text-center">
           <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
             © 2024 IMERYS Operación Santiago
           </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
