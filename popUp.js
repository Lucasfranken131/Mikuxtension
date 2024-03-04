function getWalk() {
    document.getElementById('walk').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['mikuPage.js']
                //        files: ['contentScript.js'],  // To call external file instead
            }).then(() => console.log('Injected a function!'));
        });
    });
}

window.onload = getWalk;
