const websiteSubStrings = [
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
function startFunction(){
    chrome.tabs.executeScript(null, {
		file: './js/start.js'
	});
}


function stopFunction(){
    chrome.tabs.executeScript(null, {
		file: './js/stop.js'
	});
}

//initiating
window.onload = function () {
    document.querySelector("button#start").addEventListener('click', startFunction);
    document.querySelector("button#stop").addEventListener('click', stopFunction);
}