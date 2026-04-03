import { initialAchievements as achievementsPT } from './pt-BR/achievements';
import { initialAchievements as achievementsEN } from './en/achievements';

import { macroConcepts as macroPt, productionChains as chainsPt } from './pt-BR/economy';
import { macroConcepts as macroEn, productionChains as chainsEn } from './en/economy';

import { militaryNodes as militaryPt } from './pt-BR/military';
import { militaryNodes as militaryEn } from './en/military';

import { politicsNodes as politicsPt } from './pt-BR/politics';
import { politicsNodes as politicsEn } from './en/politics';

import { treasureMaps as mapsPt } from './pt-BR/maps';
import { treasureMaps as mapsEn } from './en/maps';

import { countryGuides as guidesPt } from './pt-BR/guides';
import { countryGuides as guidesEn } from './en/guides';

export const getAchievementsData = (lang) => lang === 'en' ? achievementsEN : achievementsPT;
export const getEconomyData = (lang) => lang === 'en' ? { macroConcepts: macroEn, productionChains: chainsEn } : { macroConcepts: macroPt, productionChains: chainsPt };
export const getMilitaryData = (lang) => lang === 'en' ? militaryEn : militaryPt;
export const getPoliticsData = (lang) => lang === 'en' ? politicsEn : politicsPt;
export const getMapsData = (lang) => lang === 'en' ? mapsEn : mapsPt;
export const getGuidesData = (lang) => lang === 'en' ? guidesEn : guidesPt;
