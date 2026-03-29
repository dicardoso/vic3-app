import {
    Trophy, Map, Target, BookOpen, Star, Award, Shield, Coins, Users
} from 'lucide-react';

export default function IconMapper({ type, className }) {
    switch (type) {
        case 'coins': return <Coins className={className} />;
        case 'shield': return <Shield className={className} />;
        case 'users': return <Users className={className} />;
        case 'map': return <Map className={className} />;
        case 'book': return <BookOpen className={className} />;
        case 'target': return <Target className={className} />;
        case 'award': return <Award className={className} />;
        case 'star': return <Star className={className} />;
        default: return <Trophy className={className} />;
    }
}
