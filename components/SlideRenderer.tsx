
import React from 'react';
import { SlideData, SlideType } from '../types.ts';
import TrackingTable from './TrackingTable.tsx';

const SlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case SlideType.TITLE:
      return (
        <div className="text-center px-12 animate-in fade-in zoom-in duration-700">
          <div className="mb-6 inline-block py-2 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wider uppercase">
            Propuesta Estratégica RRHH
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {slide.subtitle}
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
            <div className="w-4 h-1.5 bg-slate-200 rounded-full"></div>
            <div className="w-4 h-1.5 bg-slate-200 rounded-full"></div>
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
            <div className="bg-red-50 rounded-2xl border border-red-100 p-8 relative overflow-hidden flex items-center justify-center">
               <div className="absolute top-4 left-4 text-red-200 text-6xl opacity-30">
                 <i className="fa-solid fa-quote-left"></i>
               </div>
               <div className="text-center relative z-10">
                 <p className="text-3xl font-black italic text-red-600 leading-tight mb-2 uppercase">
                   "RRHH no existe"
                 </p>
                 <p className="text-xl font-bold text-red-400">"RRHH no nos apoya"</p>
                 <div className="mt-4 text-xs font-bold text-red-400/60 uppercase tracking-widest">— Clima Interno Santiago</div>
               </div>
               <div className="absolute bottom-4 right-4 text-red-200 text-6xl opacity-30">
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
                <div className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-4">{item.layer}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-lg italic text-blue-100">
              "Propongo la <strong>Etapa 2: Interactividad Total</strong>. Al integrar esta web en Common Play y los QR en las mesas, les damos el poder de comunicarse sin levantarse de su silla."
            </p>
          </div>
        </div>
      );

    case SlideType.DETAIL:
      return (
        <div className="w-full h-full p-16 flex items-center">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl mb-8 shadow-xl shadow-blue-200">
                  <i className={`fa-solid ${slide.content.icon}`}></i>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{slide.title}</h2>
                <p className="text-xl text-blue-600 font-bold mb-8">{slide.subtitle}</p>
                <div className="space-y-4">
                  {slide.content.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span className="text-slate-700 text-lg">{f}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-slate-100 rounded-[2.5rem] p-6 shadow-inner border border-slate-200/50">
                <div className="aspect-[4/3] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-blue-600 h-12 flex items-center px-6 justify-between">
                    <div className="text-white text-xs font-bold tracking-tighter">IMERYS WEB APP</div>
                    <div className="w-4 h-4 rounded-full bg-white/20"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="h-6 w-1/2 bg-slate-100 rounded mb-6"></div>
                    <div className="space-y-3">
                      <div className="h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center px-4">
                        <span className="text-[10px] text-blue-400 font-bold">CANAL SEGURO Y ANÓNIMO</span>
                      </div>
                      <div className="h-32 bg-slate-50 border border-dashed border-slate-200 rounded-lg flex items-center justify-center italic text-slate-300 text-xs text-center p-4">
                         Simulación de formulario de escucha activa para operarios.
                      </div>
                      <div className="h-10 bg-blue-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      );

    case SlideType.INTERACTIVE_PREVIEW:
      return (
        <div className="w-full h-full p-16 flex flex-col">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">{slide.title}</h2>
            <p className="text-slate-500 font-medium">{slide.subtitle}</p>
          </div>
          <div className="grid grid-cols-3 gap-8 flex-1">
            {/* Urna de Cristal */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                   <i className="fa-solid fa-box-open"></i>
                 </div>
                 <h3 className="font-bold text-slate-800">Urna de Cristal</h3>
               </div>
               <div className="flex-1 space-y-4">
                 <div className="p-4 bg-indigo-50/50 rounded-xl">
                   <p className="text-sm font-bold text-indigo-900 mb-2">Renovación de Comedor</p>
                   <div className="w-full h-2.5 bg-indigo-200 rounded-full mb-2">
                     <div className="h-full bg-indigo-600 rounded-full" style={{width: '65%'}}></div>
                   </div>
                   <div className="flex justify-between items-center text-[10px] font-bold">
                     <span className="text-indigo-600 uppercase">En Proceso de Compra</span>
                     <span className="text-indigo-800">65%</span>
                   </div>
                 </div>
                 <p className="text-[10px] text-slate-400 italic">Gestión visual para erradicar rumores de falta de avance.</p>
               </div>
            </div>

            {/* Kudos */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                   <i className="fa-solid fa-heart"></i>
                 </div>
                 <h3 className="font-bold text-slate-800">Muro de Kudos</h3>
               </div>
               <div className="flex-1 space-y-3">
                 <div className="p-3 bg-pink-50 rounded-xl border border-pink-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-1 opacity-10">
                     <i className="fa-solid fa-quote-right text-4xl"></i>
                   </div>
                   <p className="text-[10px] text-pink-900 font-bold mb-1">Para: Juan Perez</p>
                   <p className="text-[11px] text-slate-600 italic leading-tight">"¡Gracias Juan por el apoyo en la carga del turno noche!"</p>
                   <p className="text-[9px] text-pink-400 text-right mt-2 font-bold">— Carlos M.</p>
                 </div>
                 <button className="w-full py-2 bg-pink-600 text-white rounded-lg text-xs font-bold hover:bg-pink-700 transition-colors">
                   Enviar Reconocimiento
                 </button>
               </div>
            </div>

            {/* Menú del Comedor */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                   <i className="fa-solid fa-utensils"></i>
                 </div>
                 <h3 className="font-bold text-slate-800">Menú del Día</h3>
               </div>
               <div className="space-y-2">
                 {slide.content.menu.map((m: string, i: number) => (
                   <div key={i} className="flex justify-between items-center p-2 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0">
                     <span className="text-xs font-medium text-slate-700">{m}</span>
                     <i className="fa-solid fa-circle-check text-green-500 text-[10px]"></i>
                   </div>
                 ))}
                 <div className="mt-4 p-3 bg-orange-50 rounded-xl text-center">
                   <p className="text-[10px] text-orange-800 font-bold">ACTUALIZACIÓN DIARIA</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
             <button className="px-6 py-2 bg-red-600 text-white rounded-full font-bold text-sm shadow-lg shadow-red-200 flex items-center gap-2 animate-pulse">
               <i className="fa-solid fa-bell"></i>
               Llamado de Auxilio / Contacto Privado
             </button>
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
                  {item.step === 'QR en Mesas' ? 'Prioridad 1' : 'Implementado'}
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
                <div className="w-24 h-24 rounded-3xl bg-green-50 text-green-600 flex items-center justify-center text-3xl mb-6 border-2 border-green-100 shadow-sm">
                  <i className={`fa-solid ${i === 0 ? 'fa-chart-line-down' : i === 1 ? 'fa-face-laugh-beam' : 'fa-gauge-high'}`}></i>
                </div>
                <p className="text-lg font-bold text-slate-700 leading-tight">{item}</p>
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
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                   <h3 className="font-black text-lg mb-4 text-blue-600 uppercase tracking-tighter italic">¿Almorzando con una buena idea? 💡</h3>
                   <div className="prose prose-slate italic text-slate-600 space-y-4">
                     <p>¡Queremos escucharte! Escanea este código para:</p>
                     <ul className="list-none space-y-2">
                       <li className="flex items-center gap-2"><i className="fa-solid fa-comment-dots text-blue-500"></i> Canal de Escucha Directa (Seguro y Anónimo).</li>
                       <li className="flex items-center gap-2"><i className="fa-solid fa-newspaper text-blue-500"></i> Noticias y Beneficios del mes.</li>
                       <li className="flex items-center gap-2"><i className="fa-solid fa-star text-blue-500"></i> Reconocer el trabajo de un compañero.</li>
                     </ul>
                     <div className="pt-4 border-t border-slate-100">
                       <p className="font-bold text-slate-800">"Tu opinión es el motor de IMERYS Santiago."</p>
                     </div>
                   </div>
                </div>
             </div>
             <div className="flex justify-center">
                <div className="w-72 h-[420px] bg-white rounded-[32px] shadow-2xl border-[8px] border-slate-800 relative overflow-hidden flex flex-col p-6 items-center text-center justify-between">
                   <div className="w-16 h-1 bg-slate-800 rounded-full mb-4"></div>
                   <div className="space-y-2">
                     <div className="flex justify-center gap-1 items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                        <p className="text-[10px] font-black text-slate-800 tracking-widest">IMERYS</p>
                     </div>
                     <h4 className="text-lg font-extrabold text-slate-800 leading-tight">¿Tienes una idea?</h4>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Escanea con tu celular</p>
                   </div>
                   
                   <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center border-[6px] border-blue-600 p-2 shadow-lg shadow-blue-100">
                      <i className="fa-solid fa-qrcode text-7xl text-blue-600"></i>
                   </div>

                   <p className="text-[10px] text-slate-500 leading-tight font-medium px-4">
                     Oficina de RRHH Virtual 24/7.<br/>Canal Seguro y Anónimo.
                   </p>
                   <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full bg-slate-50"></div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-2">{slide.title}</h2>
            <p className="text-xl text-slate-500 font-medium">Estado de la transformación digital Santiago.</p>
          </div>
          <TrackingTable />
        </div>
      );

    default:
      return <div>Slide not found</div>;
  }
};

export default SlideRenderer;
