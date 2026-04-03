"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 max-w-md w-full text-center shadow-2xl flex flex-col items-center space-y-6">
        <div className="bg-red-500/20 p-4 rounded-full">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-100">Algo deu errado!</h2>
          <p className="text-slate-400 text-sm">
            Encontramos um erro inesperado ao carregar esta página.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Tentar Novamente
        </button>
      </div>
    </div>
  );
}
