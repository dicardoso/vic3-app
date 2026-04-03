import { useState } from 'react';
import { Route, Flag, ArrowRight, Footprints, GitMerge } from 'lucide-react';
import { treasureMaps } from '@/data/maps';
import { useDictionary } from './DictionaryContext';
import IconMapper from './IconMapper';
import { getDifficultyKey } from '@/utils/helpers';

export default function MapTab({ achievements, onSelectAchievement }) {
    const { dict } = useDictionary();
    const [selectedMapRoute, setSelectedMapRoute] = useState(null);

    // --- HELPER FUNCTION FOR MAP ---
    const getAchievement = (id) => achievements.find(a => a.id === id);

    const getDifficultyColor = (diff) => {
        const key = getDifficultyKey(diff) || diff;
        switch(key) {
            case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'hard': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            case 'veryHard': return 'bg-red-500/20 text-red-400 border-red-500/30';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    return (
        <div className="space-y-8">
            {!selectedMapRoute ? (
                <>
                    <div className="mb-8 border-b border-slate-800 pb-8">
                        <h2 className="text-3xl font-bold text-white mb-3">{dict.map.title}</h2>
                        <p className="text-slate-400 max-w-4xl leading-relaxed">
                            {dict.map.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treasureMaps.map(map => (
                            <div
                                key={map.id}
                                onClick={() => setSelectedMapRoute(map)}
                                className={`bg-slate-800 border border-slate-700 hover:${map.themeBorder} rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 shadow-md hover:shadow-lg`}
                            >
                                <div className={`h-20 ${map.themeBg} flex items-center px-5 relative overflow-hidden border-b border-slate-700/50`}>
                                    <Route className={`w-8 h-8 ${map.iconColor} opacity-70`} />
                                    <h3 className="text-xl font-bold text-white ml-3 z-10">{map.title}</h3>
                                </div>
                                <div className="p-5">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 rounded-md bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300">
                                        <Flag className="w-3.5 h-3.5" />
                                        {map.country}
                                    </div>
                                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                                        {map.description}
                                    </p>
                                    <div className={`mt-4 text-sm font-semibold flex items-center ${map.iconColor}`}>
                                        {dict.map.inspectRoute} <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-800 pb-6 mb-8">
                        <div>
                            <button
                                onClick={() => setSelectedMapRoute(null)}
                                className="text-sm text-slate-400 hover:text-white flex items-center mb-4 transition-colors"
                            >
                                <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> {dict.map.backToMaps}
                            </button>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedMapRoute.title}</h2>
                            <span className="text-sm px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-medium inline-flex items-center gap-2">
                                <Flag className="w-4 h-4 text-slate-400" /> {selectedMapRoute.country}
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm max-w-lg text-left md:text-right leading-relaxed">
                            {selectedMapRoute.description}
                        </p>
                    </div>

                    <div className="relative pl-4 md:pl-8 py-4">
                        <div className={`absolute top-0 bottom-0 left-[27px] md:left-[43px] w-1.5 rounded-full bg-slate-800`}></div>

                        <div className="space-y-12">
                            {selectedMapRoute.steps.map((step, index) => (
                                <div key={index} className="relative">

                                    {step.type === 'single' && (() => {
                                        const ach = getAchievement(step.achievementId);
                                        if (!ach) return null;
                                        return (
                                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 ml-10 md:ml-16">
                                                <div className={`absolute -left-[19px] md:-left-[15px] top-6 w-5 h-5 rounded-full border-4 border-slate-900 z-10 ${ach.completed ? 'bg-green-500' : selectedMapRoute.themeBg.replace('/30', '')}`}></div>

                                                <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-slate-500 transition-colors">
                                                    <div className="flex flex-col md:flex-row gap-5">
                                                        <div className="flex-1">
                                                            <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2 ${selectedMapRoute.iconColor}`}>
                                                                <Footprints className="w-4 h-4" /> {dict.map.step} {index + 1}
                                                            </h4>
                                                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                                                {step.context}
                                                            </p>
                                                        </div>

                                                        <div
                                                            className={`md:w-64 p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg ${ach.completed ? 'bg-green-900/20 border-green-500/30' : 'bg-slate-900 border-slate-600'}`}
                                                            onClick={() => onSelectAchievement(ach)}
                                                        >
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <div className={`p-1.5 rounded-md ${ach.completed ? 'bg-green-500/20 text-green-400' : 'bg-slate-800 text-slate-400'}`}>
                                                                    <IconMapper type={ach.iconType} className="w-5 h-5" />
                                                                </div>
                                                                <h5 className={`font-bold text-sm leading-tight ${ach.completed ? 'text-green-400 line-through opacity-80' : 'text-white'}`}>
                                                                    {ach.name}
                                                                </h5>
                                                            </div>
                                                            <div className="flex justify-between items-center mt-2">
                                                                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getDifficultyColor(ach.difficulty)}`}>
                                                                    {dict.difficulties[getDifficultyKey(ach.difficulty) || ach.difficulty] || ach.difficulty}
                                                                </span>
                                                                <div className="text-[10px] text-slate-500 hover:text-amber-500 uppercase font-bold flex items-center">
                                                                    {dict.map.readGuide} <ArrowRight className="w-3 h-3 ml-0.5" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}

                                    {step.type === 'branch' && (
                                        <div className="ml-10 md:ml-16">
                                            <div className="absolute -left-[23px] md:-left-[19px] top-4 w-7 h-7 rounded-full border-4 border-slate-900 bg-amber-500 z-10 flex items-center justify-center">
                                                <GitMerge className="w-3 h-3 text-slate-900" />
                                            </div>

                                            <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-5 mb-6">
                                                <h4 className="text-amber-500 font-bold flex items-center gap-2 mb-2">
                                                    <GitMerge className="w-5 h-5" /> {step.title}
                                                </h4>
                                                <p className="text-sm text-slate-300">{step.description}</p>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                                                <div className="hidden lg:block absolute top-0 left-[25%] right-[25%] h-px bg-slate-800 -mt-3"></div>

                                                {step.paths.map((path, pathIdx) => {
                                                    const ach = getAchievement(path.achievementId);
                                                    if (!ach) return null;
                                                    return (
                                                        <div key={pathIdx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex flex-col h-full hover:border-slate-500 transition-colors">
                                                            <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                                                                <span className="font-bold text-amber-500 mr-1">{dict.map.option} {pathIdx + 1}:</span>
                                                                {path.context}
                                                            </p>

                                                            <div
                                                                className={`p-4 rounded-lg border mt-auto cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg ${ach.completed ? 'bg-green-900/20 border-green-500/30' : 'bg-slate-900 border-slate-600'}`}
                                                                onClick={() => onSelectAchievement(ach)}
                                                            >
                                                                <div className="flex items-center gap-3 mb-2">
                                                                    <div className={`p-1.5 rounded-md ${ach.completed ? 'bg-green-500/20 text-green-400' : 'bg-slate-800 text-slate-400'}`}>
                                                                        <IconMapper type={ach.iconType} className="w-5 h-5" />
                                                                    </div>
                                                                    <h5 className={`font-bold text-sm leading-tight ${ach.completed ? 'text-green-400 line-through opacity-80' : 'text-white'}`}>
                                                                        {ach.name}
                                                                    </h5>
                                                                </div>
                                                                <div className="flex justify-between items-center mt-2">
                                                                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getDifficultyColor(ach.difficulty)}`}>
                                                                        {dict.difficulties[getDifficultyKey(ach.difficulty) || ach.difficulty] || ach.difficulty}
                                                                    </span>
                                                                    <div className="text-[10px] text-slate-500 hover:text-amber-500 uppercase font-bold flex items-center">
                                                                        {dict.map.readGuide} <ArrowRight className="w-3 h-3 ml-0.5" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>

                        <div className="relative mt-12 ml-10 md:ml-16">
                            <div className={`absolute -left-[19px] md:-left-[15px] top-0 w-5 h-5 rounded-full border-4 border-slate-900 bg-slate-700 z-10 flex items-center justify-center`}>
                                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                            </div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{dict.map.endOfCampaign}</span>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
