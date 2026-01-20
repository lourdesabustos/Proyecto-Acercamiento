
import React, { useState } from 'react';
import { Task } from '../types';

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Definición de Canales Digitales', status: 'COMPLETED' },
  { id: '2', title: 'Configuración Web App (Vercel)', status: 'COMPLETED' },
  { id: '3', title: 'Presentación a Dirección', status: 'IN_PROGRESS' },
  { id: '4', title: 'Integración Common Play', status: 'PENDING' },
  { id: '5', title: 'Impresión Material POP (QR)', status: 'PENDING' },
  { id: '6', title: 'Lanzamiento Planta Santiago', status: 'PENDING' }
];

const TrackingTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const toggleStatus = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus: Task['status'] = 
          t.status === 'PENDING' ? 'IN_PROGRESS' : 
          t.status === 'IN_PROGRESS' ? 'COMPLETED' : 'PENDING';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const getStatusStyle = (status: Task['status']) => {
    switch (status) {
      case 'COMPLETED': return 'bg-green-100 text-green-700 border-green-200';
      case 'IN_PROGRESS': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'COMPLETED': return 'fa-circle-check';
      case 'IN_PROGRESS': return 'fa-spinner fa-spin';
      default: return 'fa-circle';
    }
  };

  const completionPercent = Math.round((tasks.filter(t => t.status === 'COMPLETED').length / tasks.length) * 100);

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Progreso Global</span>
            <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${completionPercent}%` }}></div>
            </div>
            <span className="font-bold text-blue-600">{completionPercent}%</span>
         </div>
         <div className="text-xs text-slate-400 italic">Haz clic en el estado para actualizar</div>
      </div>
      
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Tarea</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <span className={`text-lg font-medium ${task.status === 'COMPLETED' ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                    {task.title}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => toggleStatus(task.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold border flex items-center gap-2 ml-auto transition-all transform active:scale-95 ${getStatusStyle(task.status)}`}
                  >
                    <i className={`fa-solid ${getStatusIcon(task.status)}`}></i>
                    {task.status.replace('_', ' ')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrackingTable;
