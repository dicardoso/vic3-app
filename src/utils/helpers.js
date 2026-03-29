export function getDifficultyColor(diff) {
    switch (diff) {
        case 'Fácil': return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'Médio': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        case 'Difícil': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
        case 'Muito Difícil': return 'bg-red-500/20 text-red-400 border-red-500/30';
        default: return 'bg-gray-700 text-gray-300 border-gray-600/50';
    }
}
