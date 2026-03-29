// Map internal difficulty strings (from data) to dictionary keys
const difficultyKeyMap = {
    'Fácil': 'easy',
    'Médio': 'medium',
    'Difícil': 'hard',
    'Muito Difícil': 'veryHard',
    'Fácil a Médio': 'easyToMedium',
    'Médio a Difícil': 'mediumToHard',
};

export function getDifficultyKey(internalDifficulty) {
    return difficultyKeyMap[internalDifficulty] || null;
}

export function getDifficultyColor(diff) {
    // Accept either internal keys or translated values
    // First check direct match, then check if it matches any known pattern
    if (diff === 'Fácil' || diff === 'Easy') return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (diff === 'Médio' || diff === 'Medium') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (diff === 'Difícil' || diff === 'Hard') return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    if (diff === 'Muito Difícil' || diff === 'Very Hard') return 'bg-red-500/20 text-red-400 border-red-500/30';
    // Compound difficulties used in guides
    if (diff.includes('Fácil') || diff.includes('Easy')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (diff.includes('Médio') || diff.includes('Medium')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-gray-700 text-gray-300 border-gray-600/50';
}
