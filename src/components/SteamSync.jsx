"use client";

import { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function SteamSync({ dict, onSyncSuccess }) {
  const [steamId, setSteamId] = useState(''); 
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [steamProfile, setSteamProfile] = useState(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('vic3_steam_profile');
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setSteamProfile(parsed);
        setSteamId(parsed.steamid);
      } catch (e) {}
    } else {
        setSteamId('76561198297547087');
    }
  }, []);

  const getFlagEmoji = (countryCode) => {
    if (!countryCode) return '';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const handleSync = async () => {
    if (!steamId) return;

    if (!window.confirm(dict.steamSync.confirmSync || 'Sincronizar com a Steam irá sobrescrever suas conquistas atuais marcadas manualmente. Deseja continuar?')) {
        return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`/api/steam?steamId=${steamId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sync');
      }

      // Filter achievements that are achieved (achieved === 1)
      const achievedList = data.achievements
        .filter((ach) => ach.achieved === 1)
        .map((ach) => {
          // Normalizes apiname e.g. "achievement_poppydock" -> "poppydock"
          let id = ach.apiname;
          if (id.startsWith('achievement_')) {
            id = id.replace('achievement_', '');
          }
          
          if (id === 'federation_day') {
             id = 'federation_of_the_andes';
          }
          
          return id;
        });

      if (data.profile) {
          setSteamProfile(data.profile);
          localStorage.setItem('vic3_steam_profile', JSON.stringify(data.profile));
      }

      onSyncSuccess(achievedList);
      setStatus('success');
      
      // Revert to idle after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      if (err.message.includes('403') || err.message.includes('Private')) {
          setErrorMessage(dict.steamSync.errorAuth);
      } else {
          setErrorMessage(err.message || dict.steamSync.errorGeneric);
      }
    }
  };

  const clearProfile = () => {
      setSteamProfile(null);
      localStorage.removeItem('vic3_steam_profile');
  };

  return (
    <div className="flex items-center gap-2 relative">
      {steamProfile ? (
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 py-1.5 px-3 rounded-lg shadow-inner">
              <img src={steamProfile.avatar} alt="Avatar" className="w-6 h-6 rounded-md" />
              <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-200 leading-tight">
                      {steamProfile.personaname} {getFlagEmoji(steamProfile.loccountrycode)}
                  </span>
              </div>
              <button onClick={clearProfile} className="text-slate-500 hover:text-rose-400 transition-colors ml-1" title="Sair / Trocar de Usuário">
                  <X className="w-4 h-4" />
              </button>
          </div>
      ) : (
          <input
            type="text"
            placeholder={dict.steamSync.placeholder}
            value={steamId}
            onChange={(e) => setSteamId(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2 placeholder-slate-500 shadow-inner w-56"
          />
      )}
      
      <button
        onClick={handleSync}
        disabled={status === 'loading' || !steamId}
        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors min-w-[160px] ${
          status === 'loading' ? 'bg-slate-700 text-slate-400 cursor-not-allowed' :
          status === 'success' ? 'bg-green-600/20 text-green-400 border border-green-500/50' :
          status === 'error' ? 'bg-red-600/20 text-red-400 border border-red-500/50' :
          'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 cursor-pointer'
        }`}
      >
        {status === 'loading' ? (
          <><RefreshCw className="w-4 h-4 animate-spin" /> {dict.steamSync.syncing}</>
        ) : status === 'success' ? (
          <><CheckCircle2 className="w-4 h-4" /> {dict.steamSync.success}</>
        ) : (
          <><RefreshCw className="w-4 h-4" /> {dict.steamSync.button}</>
        )}
      </button>

      {status === 'error' && (
        <div className="absolute top-12 right-0 z-50 bg-slate-900 border border-red-500/50 text-red-400 text-xs px-3 py-2 rounded-md whitespace-nowrap shadow-xl flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errorMessage}
        </div>
      )}
    </div>
  );
}
