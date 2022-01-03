const websiteSubStrings = [
    'whatsapp',
    'linkedin',
    'facebook',
    'twitter',
    'instagram'
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
		file: 'start.js'
	});
    // document.querySelector("button#start").className='hidden';
    // document.querySelector("button#stop").className='';

}


function stopFunction(){
    chrome.tabs.executeScript(null, {
		file: 'stop.js'
	});
    // document.querySelector("button#stop").className='hidden';
    // document.querySelector("button#start").className='';
}


window.onload = function () {
    document.querySelector("button#start").addEventListener('click', startFunction);
    document.querySelector("button#start").innerText = 'Go Anonymous';
    // document.querySelector("button#start").className='';

    document.querySelector("button#stop").addEventListener('click', stopFunction);
    document.querySelector("button#stop").innerText = 'Stop';
    // document.querySelector("button#stop").className='hidden';
}