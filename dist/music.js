const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    lrcType: 3,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'G_E_M_ 邓紫棋 - Walk on Water.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: '孟佳 - 煽风点火.mp3',
            cover: 'cover2.jpg',
        }
    ]
});