
import React from 'react';
import { SlideData, SlideType } from '../types.ts';
import TrackingTable from './TrackingTable.tsx';

const SlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case SlideType.TITLE:
      return (
        <div className="text-center px-12 animate-in fade-in zoom-in duration-700">
          <div className="mb-6 inline-block py-2 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wider uppercase">
            Propuesta RRHH 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {slide.subtitle}
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-12 h-1 bg-blue-600"></div>
            <div className="w-12 h-1 bg-slate-200"></div>
            <div className="w-12 h-1 bg-slate-200"></div>
          </div>
        </div>
      );

    case SlideType.PROBLEM:
      return (
        <div className="w-full h-full p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </span>
            {slide.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {(slide.content as string[]).map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 group-hover:border-red-400 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors" />
                  </div>
                  <p className="text-xl text-slate-700 leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 relative overflow-hidden flex items-center justify-center">
               <div className="absolute top-4 left-4 text-slate-200 text-6xl opacity-50">
                 <i className="fa-solid fa-quote-left"></i>
               </div>
               <p className="text-2xl font-bold italic text-red-600 text-center relative z-10 leading-tight">
                 "RRHH no existe, RRHH no nos apoya"
               </p>
               <div className="absolute bottom-4 right-4 text-slate-200 text-6xl opacity-50">
                 <i className="fa-solid fa-quote-right"></i>
               </div>
            </div>
          </div>
        </div>
      );

    case SlideType.SOLUTION_OVERVIEW:
      return (
        <div className="w-full h-full p-16 flex flex-col justify-center bg-blue-600 text-white">
          <h2 className="text-4xl font-bold mb-12">{slide.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(slide.content as any[]).map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-default">
                <div className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-4">Capa {i+1}: {item.layer}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
                <div className="mt-6 w-10 h-1 bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.DETAIL:
      return (
        <div className="w-full h-full p-16 flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-4xl mb-8 shadow-xl shadow-blue-200">
                  <i className={`fa-solid ${slide.content.icon}`}></i>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{slide.title}</h2>
                <p className="text-xl text-blue-600 font-medium mb-8">{slide.subtitle}</p>
                <div className="space-y-4">
                  {slide.content.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <i className="fa-solid fa-check text-green-500"></i>
                      <span className="text-slate-700 text-lg">{f}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-slate-100 rounded-3xl p-4 shadow-inner">
                <div className="aspect-video bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                  <div className="h-6 border-b flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 flex flex-col p-4">
                    <div className="h-8 w-1/3 bg-slate-100 rounded mb-4"></div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-xl animate-pulse"></div>
                      <div className="bg-slate-50 rounded-xl animate-pulse"></div>
                      <div className="bg-slate-50 rounded-xl animate-pulse col-span-2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 text-xs text-slate-400 italic">Vista previa del sistema implementado</p>
             </div>
          </div>
        </div>
      );

    case SlideType.LOGISTICS:
      return (
        <div className="w-full h-full p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">{slide.title}</h2>
          <div className="space-y-8">
            {(slide.content as any[]).map((item, i) => (
              <div key={i} className="flex items-center gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{item.step}</h3>
                  <p className="text-slate-600">{item.detail}</p>
                </div>
                <div className="text-blue-600 font-bold">
                  {item.step === 'Material POP' ? 'Costo Bajo' : 'Implementado'}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.KPI:
      return (
        <div className="w-full h-full p-16 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">{slide.title}</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {(slide.content as string[]).map((item, i) => (
              <div key={i} className="w-64 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-3xl mb-6 border-4 border-green-100">
                  <i className={`fa-solid ${i === 0 ? 'fa-arrow-trend-down' : i === 1 ? 'fa-face-smile' : 'fa-users'}`}></i>
                </div>
                <p className="text-lg font-medium text-slate-700 leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case SlideType.MOCKUP:
      return (
        <div className="w-full h-full p-16 flex items-center justify-center bg-slate-50">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{slide.title}</h2>
                <p className="text-xl text-slate-500 mb-8">{slide.subtitle}</p>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                   <h3 className="font-bold text-lg mb-4 text-blue-600">Texto Sugerido:</h3>
                   <div className="prose prose-slate italic text-slate-600 space-y-2">
                     <p>¿Almorzando con una buena idea? 💡</p>
                     <p>¡Queremos escucharte! Escanea este código para:</p>
                     <ul className="list-disc pl-5">
                       <li>Enviarnos una sugerencia o duda a RRHH.</li>
                       <li>Ver las noticias de la planta y los beneficios del mes.</li>
                       <li>Reconocer el buen trabajo de un compañero.</li>
                     </ul>
                     <p className="font-bold">Tu opinión es el motor de IMERYS Santiago.</p>
                   </div>
                </div>
             </div>
             <div className="flex justify-center">
                <div className="w-80 h-[480px] bg-white rounded-[40px] shadow-2xl border-[12px] border-slate-800 relative overflow-hidden flex flex-col p-6 items-center text-center justify-between">
                   <div className="w-20 h-2 bg-slate-800 rounded-full mb-8"></div>
                   <div className="space-y-4">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">IMERYS SANTIAGO</p>
                     <h4 className="text-xl font-bold text-slate-800">¿Almorzando con una buena idea?</h4>
                     <p className="text-sm text-slate-500">Escanea para conectarte</p>
                   </div>
                   
                   <div className="w-48 h-48 bg-slate-100 rounded-2xl flex items-center justify-center border-4 border-blue-600">
                      <i className="fa-solid fa-qrcode text-8xl text-blue-600"></i>
                   </div>

                   <p className="text-xs text-slate-400 leading-tight">
                     Tu opinión es el motor de nuestra planta.<br/>Escanea con tu celular.
                   </p>
                   <div className="w-12 h-12 rounded-full border border-slate-200 mt-4 flex items-center justify-center">
                     <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      );

    case SlideType.TRACKING:
      return (
        <div className="w-full h-full p-16 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{slide.title}</h2>
            <p className="text-xl text-slate-500">{slide.subtitle}</p>
          </div>
          <TrackingTable />
        </div>
      );

    default:
      return <div>Slide not found</div>;
  }
};

export default SlideRenderer;
