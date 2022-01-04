var anonymousImages = [
    'https://avatarfiles.alphacoders.com/978/thumb-1920-97857.gif',
    'https://avatarfiles.alphacoders.com/978/thumb-97846.gif',
    'https://avatarfiles.alphacoders.com/978/thumb-97841.gif',
    'https://avatarfiles.alphacoders.com/978/thumb-97840.gif',
    'https://avatarfiles.alphacoders.com/978/thumb-97850.gif',
    'https://avatarfiles.alphacoders.com/270/thumb-270275.jpg',
    'https://avatarfiles.alphacoders.com/279/thumb-279975.jpg'
];
var websiteSubStrings = [
    'whatsapp',
    'linkedin',
    'facebook',
    // 'twitter',
    // 'instagram'
]
function checkWebsites(url) {
    for (let i = 0; i < websiteSubStrings.length; i++) {
        if (url.includes(websiteSubStrings[i])) {
            return true;
        }
    }
    return false;
}
if(checkWebsites(location.href)) {
    setInterval(() => { 
        document.querySelectorAll('img').forEach(elem => elem.src = anonymousImages[Math.floor(Math.random() * anonymousImages.length)]); 
        document.querySelectorAll('image').forEach(elem => {
            var imgElement = document.createElement("img");
            imgElement.src = anonymousImages[Math.floor(Math.random() * anonymousImages.length)];
            elem.replaceWith(imgElement);
        }); 
        document.querySelectorAll('span[dir="auto"]').forEach(elem => elem.innerText = '- - a n o n y m o u s - -');
        document.querySelectorAll('span.feed-shared-actor__title').forEach(elem => elem.innerText = '- - a n o n y m o u s - -');
        document.querySelectorAll('div.msg-overlay-list-bubble__convo-card-content-wrapper').forEach(elem => elem.innerText = '- - a n o n y m o u s - -');
        
    }, 1000)
}