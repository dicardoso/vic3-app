"use client";

import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, AlertTriangle, Globe, Trophy, BookOpen, Factory, Landmark, Swords, Compass } from 'lucide-react';

import { getAchievementsData, getGuidesData } from '@/data';

import AchievementCard from '@/components/AchievementCard';
import AchievementModal from '@/components/AchievementModal';
import GuideCard from '@/components/GuideCard';
import GuideModal from '@/components/GuideModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useDictionary } from '@/components/DictionaryContext';
import { getDifficultyKey } from '@/utils/helpers';
import EconomyTab from '@/components/EconomyTab';
import PoliticsTab from '@/components/PoliticsTab';
import MilitaryTab from '@/components/MilitaryTab';
import MapTab from '@/components/MapTab';
import SteamSync from '@/components/SteamSync';
export default function Vic3AchievementTracker() {
    const { dict, lang } = useDictionary();
    const initialAchievements = useMemo(() => getAchievementsData(lang), [lang]);
    const countryGuides = useMemo(() => getGuidesData(lang), [lang]);

    // --- TABS ---
    const [activeTab, setActiveTab] = useState('achievements'); // 'achievements' | 'guides'

    // --- ACHIEVEMENTS ---
    const [achievements, setAchievements] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDifficulty, setFilterDifficulty] = useState('All');
    const [filterCountry, setFilterCountry] = useState('All');
    const [filterType, setFilterType] = useState('All');
    const [groupBy, setGroupBy] = useState('none');
    const [hideCompleted, setHideCompleted] = useState(false);
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    
    // --- GUIDES ---
    const [selectedGuide, setSelectedGuide] = useState(null);

    // Load from local storage on mount
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem('vic3_achievements_v2');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                const merged = initialAchievements.map(ach => ({
                    ...ach,
                    completed: parsed[ach.id] || false
                }));
                setAchievements(merged);
            } catch {
                setAchievements(initialAchievements.map(ach => ({ ...ach, completed: false })));
            }
        } else {
            setAchievements(initialAchievements.map(ach => ({ ...ach, completed: false })));
        }
    }, [initialAchievements]);

    const handleSteamSyncSuccess = (achievedIds) => {
        setAchievements(prev => {
            const updated = prev.map(ach => ({
                ...ach,
                completed: achievedIds.includes(ach.id)
            }));

            const saveState = updated.reduce((acc, ach) => {
                if (ach.completed) acc[ach.id] = true;
                return acc;
            }, {});
            localStorage.setItem('vic3_achievements_v2', JSON.stringify(saveState));
            
            return updated;
        });
    };

    const toggleCompletion = (id, event) => {
        if (event) event.stopPropagation();

        setAchievements(prev => {
            const updated = prev.map(ach =>
                ach.id === id ? { ...ach, completed: !ach.completed } : ach
            );

            const saveState = updated.reduce((acc, ach) => {
                if (ach.completed) acc[ach.id] = true;
                return acc;
            }, {});
            localStorage.setItem('vic3_achievements_v2', JSON.stringify(saveState));

            if (selectedAchievement && selectedAchievement.id === id) {
                setSelectedAchievement(updated.find(a => a.id === id));
            }

            return updated;
        });
    };

    // Internal difficulty keys used in data
    const difficultyKeys = ['Fácil', 'Médio', 'Difícil', 'Muito Difícil'];
    const countries = useMemo(() => ['All', ...new Set(initialAchievements.map(a => a.country))].sort(), [initialAchievements]);
    const types = useMemo(() => ['All', ...new Set(initialAchievements.map(a => a.objectiveType))].sort(), [initialAchievements]);

    // Translate difficulty from internal key to display label
    function translateDifficulty(internalValue) {
        const key = getDifficultyKey(internalValue);
        return key ? (dict.difficulties[key] || internalValue) : internalValue;
    }

    const filteredAchievements = useMemo(() => {
        return achievements.filter(ach => {
            const matchSearch = ach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ach.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchDiff = filterDifficulty === 'All' || ach.difficulty === filterDifficulty;
            const matchCountry = filterCountry === 'All' || ach.country === filterCountry;
            const matchType = filterType === 'All' || ach.objectiveType === filterType;
            let matchStatus = true;
            if (hideCompleted) matchStatus = !ach.completed;
            if (showCompletedOnly) matchStatus = ach.completed;

            return matchSearch && matchDiff && matchCountry && matchType && matchStatus;
        });
    }, [achievements, searchTerm, filterDifficulty, filterCountry, filterType, hideCompleted, showCompletedOnly]);

    const groupedAchievements = useMemo(() => {
        if (groupBy === 'none') return { [dict.achievements.allAchievements]: filteredAchievements };

        return filteredAchievements.reduce((acc, ach) => {
            let key = dict.achievements.others;
            if (groupBy === 'country') key = ach.country;
            if (groupBy === 'difficulty') key = translateDifficulty(ach.difficulty);
            if (groupBy === 'type') key = ach.objectiveType;

            if (!acc[key]) acc[key] = [];
            acc[key].push(ach);
            return acc;
        }, {});
    }, [filteredAchievements, groupBy, dict]);

    const completedCount = achievements.filter(a => a.completed).length;
    const totalCount = achievements.length;
    const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans pb-12">
            <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-20 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Globe className="w-8 h-8 text-amber-500" />
                            <div>
                                <h1 className="text-2xl font-bold text-white tracking-tight">Victoria 3</h1>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{dict.header.subtitle}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {isMounted && activeTab === 'achievements' && (
                                 <div className="flex flex-col items-end">
                                     <span className="text-sm font-semibold text-slate-300 mb-1">
                                         {dict.header.progress}: {completedCount} / {totalCount} ({progressPercent}%)
                                     </span>
                                     <div className="w-full md:w-64 bg-slate-800 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="bg-amber-500 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                                            style={{ width: `${progressPercent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                            <SteamSync dict={dict} onSyncSuccess={handleSteamSyncSuccess} />
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div className="flex space-x-8 mt-6">
                        <button 
                        onClick={() => setActiveTab('achievements')}
                        className={`pb-3 border-b-2 font-medium transition-colors duration-200 ${
                            activeTab === 'achievements' 
                            ? 'border-amber-500 text-amber-500' 
                            : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                        }`}
                        >
                        <div className="flex items-center gap-2"><Trophy className="w-4 h-4" /> {dict.header.tabs.achievements}</div>
                        </button>
                        <button 
                        onClick={() => setActiveTab('guides')}
                        className={`pb-3 border-b-2 font-medium transition-colors duration-200 ${
                            activeTab === 'guides' 
                            ? 'border-amber-500 text-amber-500' 
                            : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                        }`}
                        >
                        <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> {dict.header.tabs.guides}</div>
                        </button>
                        <button 
                        onClick={() => setActiveTab('economy')}
                        className={`pb-3 border-b-2 font-medium transition-colors duration-200 ${
                            activeTab === 'economy' 
                            ? 'border-amber-500 text-amber-500' 
                            : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                        }`}
                        >
                        <div className="flex items-center gap-2"><Factory className="w-4 h-4" /> {dict.header.tabs.economy}</div>
                        </button>
                        <button 
                        onClick={() => setActiveTab('politics')}
                        className={`pb-3 border-b-2 font-medium transition-colors duration-200 ${
                            activeTab === 'politics' 
                            ? 'border-amber-500 text-amber-500' 
                            : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                        }`}
                        >
                        <div className="flex items-center gap-2"><Landmark className="w-4 h-4" /> {dict.header.tabs.politics}</div>
                        </button>
                        <button 
                        onClick={() => setActiveTab('military')}
                        className={`pb-3 border-b-2 font-medium transition-colors duration-200 ${
                            activeTab === 'military' 
                            ? 'border-amber-500 text-amber-500' 
                            : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                        }`}
                        >
                        <div className="flex items-center gap-2"><Swords className="w-4 h-4" /> {dict.header.tabs.military}</div>
                        </button>
                        <button 
                        onClick={() => setActiveTab('map')}
                        className={`pb-3 border-b-2 font-medium transition-colors duration-200 ${
                            activeTab === 'map' 
                            ? 'border-amber-500 text-amber-500' 
                            : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                        }`}
                        >
                        <div className="flex items-center gap-2"><Compass className="w-4 h-4" /> {dict.header.tabs.map}</div>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'achievements' && (
                    <>
                        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 mb-8 backdrop-blur-sm shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                                <div className="relative lg:col-span-2">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder={dict.filters.searchPlaceholder}
                                        className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block pl-10 p-2.5 placeholder-slate-500 shadow-inner"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <select
                                        className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5 shadow-sm"
                                        value={groupBy}
                                        onChange={(e) => setGroupBy(e.target.value)}
                                    >
                                        <option value="none">{dict.filters.noGrouping}</option>
                                        <option value="country">{dict.filters.groupByCountry}</option>
                                        <option value="difficulty">{dict.filters.groupByDifficulty}</option>
                                        <option value="type">{dict.filters.groupByType}</option>
                                    </select>
                                </div>

                                <div>
                                    <select
                                        className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5 shadow-sm"
                                        value={filterCountry}
                                        onChange={(e) => setFilterCountry(e.target.value)}
                                    >
                                        <option value="All">{dict.filters.allCountries}</option>
                                        {countries.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <select
                                        className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5 shadow-sm"
                                        value={filterDifficulty}
                                        onChange={(e) => setFilterDifficulty(e.target.value)}
                                    >
                                        <option value="All">{dict.filters.anyDifficulty}</option>
                                        {difficultyKeys.map(d => (
                                            <option key={d} value={d}>{translateDifficulty(d)}</option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between border-t border-slate-700 pt-4 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Filter className="w-4 h-4 text-slate-400" />
                                        <select
                                            className="bg-transparent border-none text-slate-300 text-sm focus:ring-0 cursor-pointer p-0"
                                            value={filterType}
                                            onChange={(e) => setFilterType(e.target.value)}
                                        >
                                            <option value="All">{dict.filters.allObjectiveTypes}</option>
                                            {types.filter(t => t !== 'All').map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={hideCompleted}
                                            onChange={() => {
                                                setHideCompleted(!hideCompleted);
                                                if (!hideCompleted) setShowCompletedOnly(false);
                                            }}
                                        />
                                        <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                                        <span className="ml-3 text-sm font-medium text-slate-300">{dict.filters.hideCompleted}</span>
                                    </label>

                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={showCompletedOnly}
                                            onChange={() => {
                                                setShowCompletedOnly(!showCompletedOnly);
                                                if (!showCompletedOnly) setHideCompleted(false);
                                            }}
                                        />
                                        <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                                        <span className="ml-3 text-sm font-medium text-slate-300">{dict.filters.showCompletedOnly}</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {!isMounted ? (
                            <div className="text-center py-12 text-slate-500 flex flex-col items-center">
                                <p className="animate-pulse">{dict.achievements.loading}</p>
                            </div>
                        ) : Object.keys(groupedAchievements).length === 0 ? (
                            <div className="text-center py-12 text-slate-500 flex flex-col items-center">
                                <AlertTriangle className="w-12 h-12 mb-4 text-slate-600" />
                                <p>{dict.achievements.noResults}</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {Object.entries(groupedAchievements).map(([groupName, items]) => (
                                    <div key={groupName}>
                                        {groupBy !== 'none' && (
                                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 pb-2 border-b border-slate-800">
                                                {groupName} <span className="text-sm font-normal text-slate-500 px-2 py-0.5 bg-slate-800 rounded-full">{items.length}</span>
                                            </h2>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {items.map(ach => (
                                                <AchievementCard
                                                    key={ach.id}
                                                    ach={ach}
                                                    onClick={() => setSelectedAchievement(ach)}
                                                    onToggle={(e) => toggleCompletion(ach.id, e)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'guides' && (
                    <div className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2">{dict.guides.title}</h2>
                            <p className="text-slate-400 max-w-3xl">{dict.guides.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {countryGuides.map(guide => (
                                <GuideCard 
                                    key={guide.id}
                                    guide={guide}
                                    onClick={() => setSelectedGuide(guide)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'economy' && (
                    <EconomyTab />
                )}

                {activeTab === 'politics' && (
                    <PoliticsTab />
                )}

                {activeTab === 'military' && (
                    <MilitaryTab />
                )}

                {activeTab === 'map' && (
                    <MapTab achievements={achievements} onSelectAchievement={setSelectedAchievement} />
                )}
            </main>

            <AchievementModal 
                selectedAchievement={selectedAchievement}
                onClose={() => setSelectedAchievement(null)}
                onToggle={(id, e) => toggleCompletion(id, e)}
            />

            <GuideModal
                guide={selectedGuide}
                achievements={achievements}
                onClose={() => setSelectedGuide(null)}
            />
        </div>
    );
}
