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