import { useState } from 'react';
import { Settings } from 'lucide-react';
import { macroConcepts, productionChains } from '@/data/economy';
import MacroConceptCard from './MacroConceptCard';
import ProductionChainCard from './ProductionChainCard';
import MacroConceptModal from './MacroConceptModal';
import ProductionChainModal from './ProductionChainModal';
import { useDictionary } from './DictionaryContext';

export default function EconomyTab() {
    const { dict } = useDictionary();
    const [selectedMacro, setSelectedMacro] = useState(null);
    const [selectedChain, setSelectedChain] = useState(null);

    return (
        <div className="space-y-12">
            <div className="mb-8 border-b border-slate-800 pb-8">
                <h2 className="text-3xl font-bold text-white mb-3">{dict.economy.macroTitle}</h2>
                <p className="text-slate-400 max-w-4xl mb-8 leading-relaxed">
                    {dict.economy.macroSubtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {macroConcepts.map((concept) => (
                        <MacroConceptCard
                            key={concept.id}
                            concept={concept}
                            onClick={() => setSelectedMacro(concept)}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-white mb-3">{dict.economy.microTitle}</h2>
                <p className="text-slate-400 max-w-4xl mb-8 leading-relaxed">
                    {dict.economy.microSubtitle}
                </p>

                <div className="space-y-4">
                    {productionChains.map((chain, i) => (
                        <ProductionChainCard
                            key={i}
                            chain={chain}
                            onClick={() => setSelectedChain(chain)}
                        />
                    ))}
                </div>

                <div className="mt-8 p-5 bg-blue-900/20 border border-blue-800/30 rounded-xl">
                    <h4 className="text-lg font-bold text-blue-400 flex items-center gap-2 mb-2">
                        <Settings className="w-5 h-5" /> {dict.economy.pmTipTitle}
                    </h4>
                    <p className="text-sm text-blue-200/80 leading-relaxed">
                        {dict.economy.pmTipDescription}
                    </p>
                </div>
            </div>

            <MacroConceptModal
                concept={selectedMacro}
                onClose={() => setSelectedMacro(null)}
            />

            <ProductionChainModal
                chain={selectedChain}
                onClose={() => setSelectedChain(null)}
            />
        </div>
    );
}
