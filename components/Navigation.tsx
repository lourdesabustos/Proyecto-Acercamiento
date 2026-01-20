
import React from 'react';

interface NavigationProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, total, onNext, onPrev }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 px-8">
      <div className="flex items-center gap-8 bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
        <button 
          onClick={onPrev}
          disabled={current === 0}
          className="text-white disabled:text-white/20 hover:text-blue-400 transition-colors"
        >
          <i className="fa-solid fa-chevron-left text-xl"></i>
        </button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={onNext}
          disabled={current === total - 1}
          className="text-white disabled:text-white/20 hover:text-blue-400 transition-colors"
        >
          <i className="fa-solid fa-chevron-right text-xl"></i>
        </button>
      </div>
      
      <div className="w-full max-w-6xl h-1 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Navigation;
