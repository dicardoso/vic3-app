import { Info, ChevronDown } from 'lucide-react';
import IconMapper from './IconMapper';
import { useDictionary } from './DictionaryContext';

export default function MacroConceptCard({ concept, onClick }) {
    const { dict } = useDictionary();

    return (
        <div
            onClick={onClick}
            className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 hover:border-amber-500/50 hover:bg-slate-800 cursor-pointer transition-all shadow-sm hover:shadow-lg group"
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg shadow-sm border border-slate-700/50 ${concept.bgColorTheme}`}>
                        <IconMapper type={concept.iconType} className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight pr-2">{concept.title}</h3>
                </div>
                <Info className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${concept.colorTheme}`} />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {concept.description}
            </p>
            <div className={`flex items-center text-sm font-semibold ${concept.colorTheme}`}>
                {dict.economy.lawsAndTips} <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
            </div>
        </div>
    );
}
