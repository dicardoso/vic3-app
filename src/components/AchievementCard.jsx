import { CheckCircle2, Circle, Map } from 'lucide-react';
import IconMapper from './IconMapper';
import { getDifficultyColor } from '@/utils/helpers';
import { useDictionary } from './DictionaryContext';

export default function AchievementCard({ ach, onClick, onToggle }) {
    const { dict } = useDictionary();

    return (
        <div
            onClick={onClick}
            className={`relative group cursor-pointer rounded-xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${ach.completed
                ? 'bg-slate-800/40 border-slate-700/50 opacity-80'
                : 'bg-slate-800 border-slate-600 hover:border-amber-500/50'
                }`}
        >
            <div className="p-5 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <div className={`p-2 rounded-lg ${ach.completed ? 'bg-slate-700/50 text-amber-500/50' : 'bg-amber-500/10 text-amber-500'}`}>
                        <IconMapper type={ach.iconType} className="w-6 h-6" />
                    </div>
                    <button
                        onClick={onToggle}
                        className="p-1 -mr-2 -mt-2 hover:bg-slate-700 rounded-full transition-colors"
                        title={ach.completed ? dict.achievements.uncheck : dict.achievements.markCompleted}
                    >
                        {ach.completed ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                        ) : (
                            <Circle className="w-6 h-6 text-slate-500 group-hover:text-amber-500" />
                        )}
                    </button>
                </div>

                <h3 className={`text-lg font-bold mb-1 ${ach.completed ? 'text-slate-400 line-through' : 'text-slate-100'}`}>
                    {ach.name}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-grow">
                    {ach.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    <span className={`text-xs px-2.5 py-1 rounded-md border font-medium ${getDifficultyColor(ach.difficulty)}`}>
                        {ach.difficulty}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50 flex items-center gap-1">
                        <Map className="w-3 h-3" /> {ach.country}
                    </span>
                </div>
            </div>
        </div>
    );
}
