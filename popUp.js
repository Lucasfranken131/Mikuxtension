document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('walk').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['mikuPage.js']
            }).then(() => console.log('Injected a function!'));
        });
    });
});


