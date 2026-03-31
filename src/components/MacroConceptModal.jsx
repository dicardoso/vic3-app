import { X, Landmark, Settings } from 'lucide-react';
import IconMapper from './IconMapper';
import { useDictionary } from './DictionaryContext';

export default function MacroConceptModal({ concept, onClose }) {
    const { dict } = useDictionary();
    if (!concept) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
                onClick={e => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-slate-900/95 backdrop-blur z-10 p-6 border-b border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl shadow-sm border border-slate-700 ${concept.bgColorTheme}`}>
                             <IconMapper type={concept.iconType} className={`w-6 h-6 ${concept.colorTheme}`} />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{concept.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <section>
                        <h3 className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">{dict.guides.overview}</h3>
                        <p className="text-slate-300 leading-relaxed">{concept.extendedDetails}</p>
                    </section>

                    <section className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
                        <h3 className="flex items-center gap-2 text-lg text-white font-bold mb-3">
                            <Landmark className="w-5 h-5 text-amber-500" /> Impacto das Leis Políticas
                        </h3>
                        <ul className="space-y-3">
                            {concept.lawsImpact.map((law, idx) => (
                                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${concept.colorTheme.replace('text-', 'bg-')}`}></span>
                                    {law}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-blue-900/20 p-5 rounded-xl border border-blue-800/30">
                        <h3 className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                            <Settings className="w-5 h-5" /> Dica de Jogador (Pro Tip)
                        </h3>
                        <p className="text-sm text-blue-200/80 leading-relaxed">
                            {concept.proTip}
                        </p>
                    </section>
                </div>
                
                <div className="p-6 border-t border-slate-800 bg-slate-900 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-600 shadow-sm"
                    >
                        {dict.economy.close}
                    </button>
                </div>
            </div>
        </div>
    );
}
