import {
    Trophy, Map, Target, BookOpen, Star, Award, Shield, Coins, Users,
    DollarSign, TrendingUp, Pickaxe, Factory, Combine, Settings, Info
} from 'lucide-react';

export default function IconMapper({ type, className }) {
    switch (type) {
        case 'coins': return <Coins className={className} />;
        case 'dollar': return <DollarSign className={className} />;
        case 'trendingUp': return <TrendingUp className={className} />;
        case 'users': return <Users className={className} />;
        case 'shield': return <Shield className={className} />;
        case 'map': return <Map className={className} />;
        case 'book': return <BookOpen className={className} />;
        case 'target': return <Target className={className} />;
        case 'award': return <Award className={className} />;
        case 'star': return <Star className={className} />;
        case 'pickaxe': return <Pickaxe className={className} />;
        case 'factory': return <Factory className={className} />;
        case 'combine': return <Combine className={className} />;
        case 'settings': return <Settings className={className} />;
        case 'info': return <Info className={className} />;
        default: return <Trophy className={className} />;
    }
}
