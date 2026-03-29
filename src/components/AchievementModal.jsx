import { CheckCircle2, Map, Target, BookOpen, X } from 'lucide-react';
import IconMapper from './IconMapper';
import { getDifficultyColor } from '@/utils/helpers';

export default function AchievementModal({ selectedAchievement, onClose, onToggle }) {
    if (!selectedAchievement) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
                onClick={e => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-slate-900/95 backdrop-blur z-10 p-6 border-b border-slate-800 flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${selectedAchievement.completed ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/20 text-amber-500'}`}>
                            {selectedAchievement.completed ? <CheckCircle2 className="w-8 h-8" /> : <IconMapper type={selectedAchievement.iconType} className="w-8 h-8" />}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">{selectedAchievement.name}</h2>
                            <div className="flex gap-2">
                                <span className={`text-xs px-2 py-0.5 rounded border ${getDifficultyColor(selectedAchievement.difficulty)}`}>
                                    {selectedAchievement.difficulty}
                                </span>
                                <span className="text-xs px-2 py-0.5 rounded border border-slate-600 bg-slate-800 text-slate-300">
                                    {selectedAchievement.objectiveType}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">Descrição Oficial</h3>
                        <p className="text-lg text-slate-300">{selectedAchievement.description}</p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <h3 className="flex items-center gap-2 text-amber-500 font-semibold mb-3">
                                <Map className="w-4 h-4" /> Requisitos de Início
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {selectedAchievement.startCondition}
                            </p>
                        </section>

                        <section className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <h3 className="flex items-center gap-2 text-green-500 font-semibold mb-3">
                                <Target className="w-4 h-4" /> Condições de Vitória
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {selectedAchievement.victoryCondition}
                            </p>
                        </section>
                    </div>

                    <section className="bg-amber-950/20 p-5 rounded-xl border border-amber-900/30">
                        <h3 className="flex items-center gap-2 text-amber-500 font-bold mb-4 text-lg border-b border-amber-900/50 pb-2">
                            <BookOpen className="w-5 h-5" /> Dica Rápida de Estratégia
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                            {selectedAchievement.strategy}
                        </p>
                    </section>
                </div>

                <div className="p-6 border-t border-slate-800 bg-slate-900 flex justify-end">
                    <button
                        onClick={() => onToggle(selectedAchievement.id)}
                        className={`px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors ${selectedAchievement.completed
                                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                                : 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-900/20'
                            }`}
                    >
                        {selectedAchievement.completed ? (
                            <>Desmarcar Conquista</>
                        ) : (
                            <><CheckCircle2 className="w-5 h-5" /> Marcar como Concluída</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
