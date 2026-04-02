import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const steamId = searchParams.get('steamId');

    if (!steamId) {
        return NextResponse.json({ error: 'Steam ID is required' }, { status: 400 });
    }

    const apiKey = process.env.STEAM_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'Steam API key is not configured on the server.' }, { status: 500 });
    }

    const appId = '529340'; // Victoria 3 App ID
    // l=en ensures predictable field names if we needed them, but we primarily use apiname
    const achievementsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${apiKey}&steamid=${steamId}&l=en`;
    const profileUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`;

    try {
        const [achievementsRes, profileRes] = await Promise.all([
            fetch(achievementsUrl),
            fetch(profileUrl)
        ]);
        
        let achievementsData = null;
        if (achievementsRes.ok) {
             const data = await achievementsRes.json();
             if (data.playerstats && data.playerstats.success) {
                 achievementsData = data.playerstats.achievements;
             } else {
                 return NextResponse.json({ error: 'Profile is private or game is not owned.' }, { status: 403 });
             }
        } else {
             return NextResponse.json({ error: 'Steam API error' }, { status: achievementsRes.status });
        }
        
        let profileData = null;
        if (profileRes.ok) {
             const pData = await profileRes.json();
             if (pData.response && pData.response.players && pData.response.players.length > 0) {
                 profileData = pData.response.players[0];
             }
        }

        return NextResponse.json({ 
             achievements: achievementsData,
             profile: profileData
        });
    } catch (error) {
        console.error('Steam Route Error:', error);
        return NextResponse.json({ error: 'Internal server error while fetching Steam data.' }, { status: 500 });
    }
}
