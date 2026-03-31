import React from 'react';
import { X, ArrowRight, Combine, Factory } from 'lucide-react';
import IconMapper from './IconMapper';
import { useDictionary } from './DictionaryContext';

export default function ProductionChainModal({ chain, onClose }) {
    const { dict } = useDictionary();
    if (!chain) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
                onClick={e => e.stopPropagation()}
            >
                <div className={`sticky top-0 ${chain.tier} z-10 p-6 flex justify-between items-center border-b border-black/30 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="p-3 bg-black/30 rounded-xl shadow-inner border border-white/10">
                            <IconMapper type={chain.iconType} className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white drop-shadow-md">{chain.output}</h2>
                            <span className="text-xs uppercase tracking-wider font-semibold text-white/80 drop-shadow-sm">
                                {chain.category}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-black/30 hover:bg-black/50 rounded-full text-white/80 hover:text-white transition-colors relative z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    {/* Fluxo Visual Interativo */}
                    <div className="flex flex-col items-center bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-inner relative">
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4 absolute top-3 left-4">{dict.economy.analyzeFlow}</div>

                        <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-4">
                            {chain.inputs.map((input, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg text-amber-500 font-bold text-center shadow-sm">
                                        {input}
                                    </div>
                                    {idx < chain.inputs.length - 1 && (
                                        <span className="text-slate-600 font-bold text-xl">+</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <ArrowRight className="w-8 h-8 text-slate-600 my-4" />

                        <div className={`${chain.tier} border border-white/20 px-6 py-3 rounded-xl text-white font-bold text-lg text-center shadow-lg border border-white/10 shadow-inner`}>
                            {chain.output}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
                            <h3 className="flex items-center gap-2 text-lg text-amber-400 font-bold mb-3">
                                <Combine className="w-5 h-5" /> Evolução de Métodos (PMs)
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {chain.pmEvolution}
                            </p>
                        </section>

                        <section className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
                            <h3 className="flex items-center gap-2 text-lg text-green-400 font-bold mb-3">
                                <Factory className="w-5 h-5" /> Utilização Principal
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {chain.primaryUses}
                            </p>
                        </section>
                    </div>
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
