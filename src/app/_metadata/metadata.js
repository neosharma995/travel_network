const VALID_OG_TYPES = new Set([
    'website', 'article', 'book', 'profile', 
    'music.song', 'music.album', 'music.playlist', 'music.radio_station', 
    'video.movie', 'video.episode', 'video.tv_show', 'video.other'
]);

export async function LoadscoData(param) {
    const data = param?.data || param;
    const head = (data && typeof data.head === 'string') ? data.head : '';

    const rawType = head.match(/<meta property="og:type" content="([^"]+)"/)?.[1]?.toLowerCase();
    const type = VALID_OG_TYPES.has(rawType) ? rawType : 'website';

    const metadata = {
        title: head.match(/<meta property="og:title" content="([^"]+)"/)?.[1] 
            || head.match(/<title>([^<]+)<\/title>/)?.[1] 
            || '',
        description: head.match(/<meta property="og:description" content="([^"]+)"/)?.[1] 
            || head.match(/<meta name="description" content="([^"]+)"/)?.[1] 
            || '',
        locale: head.match(/<meta property="og:locale" content="([^"]+)"/)?.[1] || '',
        type: type,
        url: head.match(/<meta property="og:url" content="([^"]+)"/)?.[1] || '',
        siteName: head.match(/<meta property="og:site_name" content="([^"]+)"/)?.[1] || '',
        updatedTime: head.match(/<meta property="og:updated_time" content="([^"]+)"/)?.[1] || '',
        card: head.match(/<meta name="twitter:card" content="([^"]+)"/)?.[1] || '',
        twitterTitle: head.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] || '',
        twitterDescription: head.match(/<meta name="twitter:description" content="([^"]+)"/)?.[1] || ''
    };

    return metadata;
}