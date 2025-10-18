
module.exports = {
    name: {
        main: 'terri API !!',
        copyright: 'Terri'
    },
    description: 'Simple API with easy and minimalistic integration for WhatsApp Bot Developers.',
    icon: '/image/icon.png',
    author: 'Terri',
    info_url: 'https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y',
    links: [
        {
            name: 'WhatsApp Information Ch.',
            url: 'https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y'
        }
    ],
    // New: Global maintenance mode
    maintenance: true,
    
    // New: Individual API status - ADD 'play' HERE
    apiStatus: {
        'youtube': 'online',
        'ytmp3': 'online', 
        'ytmp4': 'online',
        'snackvideo': 'online',
        'android1': 'online',
        'apkcombo': 'online',
        'play': 'online'  // ← ADD THIS LINE
        // Add more APIs as needed
    }
};
