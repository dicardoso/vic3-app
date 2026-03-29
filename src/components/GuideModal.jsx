import { X, Globe, Target, Shield, Trophy, CheckCircle2, Circle } from 'lucide-react';
import { useDictionary } from './DictionaryContext';

export default function GuideModal({ guide, achievements, onClose }) {
    const { dict } = useDictionary();

    if (!guide) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div 
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
                onClick={e => e.stopPropagation()} 
            >
                {/* Header */}
                <div className={`sticky top-0 ${guide.flagColor} z-10 p-6 border-b border-slate-800 flex justify-between items-start relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="bg-slate-900/40 p-4 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                            {guide.icon}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{guide.name}</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2.5 py-1 rounded bg-black/40 text-white border border-white/20 backdrop-blur-sm font-semibold tracking-wide">
                                    {guide.difficulty}
                                </span>
                                <span className="text-xs px-2.5 py-1 rounded bg-black/40 text-white border border-white/20 backdrop-blur-sm">
                                    {guide.focus}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 bg-black/30 hover:bg-black/50 rounded-full text-white/80 hover:text-white transition-colors relative z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-8">
                    <section>
                        <h3 className="flex items-center gap-2 text-xl text-white font-bold mb-3 border-b border-slate-800 pb-2">
                            <Globe className="w-5 h-5 text-amber-500" /> {dict.guides.overview}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {guide.overview}
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
                            <h3 className="flex items-center gap-2 text-lg text-green-400 font-bold mb-3">
                                <Target className="w-5 h-5" /> {dict.guides.earlyGame}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                {guide.earlyGame}
                            </p>
                        </section>

                        <section className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
                            <h3 className="flex items-center gap-2 text-amber-500 font-bold text-lg mb-3">
                                <Shield className="w-5 h-5" /> {dict.guides.midLateGame}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                {guide.midLateGame}
                            </p>
                        </section>
                    </div>

                    <section className="bg-amber-950/20 p-5 rounded-xl border border-amber-900/30">
                        <h3 className="flex items-center gap-2 text-amber-500 font-bold mb-4 text-lg border-b border-amber-900/50 pb-2">
                            <Trophy className="w-5 h-5" /> {dict.guides.relatedAchievements}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {guide.relatedAchievements.map((achName, idx) => {
                                const isCompleted = achievements.find(a => a.name === achName)?.completed;
                                return (
                                    <span key={idx} className={`px-3 py-1.5 text-sm rounded-lg border flex items-center gap-2 ${
                                        isCompleted 
                                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                                        : 'bg-slate-800 border-slate-700 text-slate-300'
                                    }`}>
                                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4 text-slate-500" />}
                                        {achName}
                                    </span>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
