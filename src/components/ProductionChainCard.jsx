import React from 'react';
import { ChevronDown, Info } from 'lucide-react';
import IconMapper from './IconMapper';
import { useDictionary } from './DictionaryContext';

export default function ProductionChainCard({ chain, onClick }) {
    const { dict } = useDictionary();

    return (
        <div
            onClick={onClick}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col md:flex-row group hover:border-amber-500/50 cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
            {/* Resultado Final */}
            <div className={`md:w-1/3 ${chain.tier} p-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/30 relative overflow-hidden`}>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info className="w-5 h-5 text-white/50" />
                </div>
                <div className="flex justify-between items-center mb-1 relative z-10">
                    <h4 className="text-xl font-bold text-white">{chain.output}</h4>
                    <IconMapper type={chain.iconType} className="w-6 h-6 text-white/80" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-white/70 relative z-10">
                    {chain.category}
                </span>
            </div>

            {/* Fluxo / Inputs */}
            <div className="md:w-2/3 p-5 flex flex-col justify-center bg-slate-800/50 relative">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm text-slate-400 font-medium">{dict.economy.requiresInput}</span>
                    {chain.inputs.map((input, idx) => (
                        <React.Fragment key={idx}>
                            <span className="bg-slate-900 text-amber-500 px-3 py-1 rounded-md text-sm border border-slate-700 font-semibold shadow-inner">
                                {input}
                            </span>
                            {idx < chain.inputs.length - 1 && (
                                <span className="text-slate-500 text-lg">+</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex gap-3 items-center">
                    <p className="text-sm text-slate-300 leading-relaxed">
                        {chain.description}
                    </p>
                    <div className="ml-auto flex items-center text-xs font-semibold text-amber-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {dict.economy.analyzeFlow} <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                    </div>
                </div>
            </div>
        </div>
    );
}
