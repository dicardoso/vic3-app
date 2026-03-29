import { ChevronDown } from 'lucide-react';

export default function GuideCard({ guide, onClick }) {
    return (
        <div 
            onClick={onClick}
            className="bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/10"
        >
            <div className={`h-24 ${guide.flagColor} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <div className="z-10 bg-slate-900/30 p-3 rounded-full backdrop-blur-sm shadow-xl border border-white/10">
                    {guide.icon}
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-1">{guide.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 font-medium">
                        {guide.difficulty}
                    </span>
                </div>
                <p className="text-sm text-slate-300 mb-4 h-16 line-clamp-3">
                    <span className="font-semibold text-slate-400">Foco: </span> 
                    {guide.focus}
                </p>
                <div className="flex items-center text-sm font-medium text-amber-500">
                    Ler o guia completo <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                </div>
            </div>
        </div>
    );
}
