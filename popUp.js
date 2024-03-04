document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('walk').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) { 
            var tabURL = tabs[0].url;
            console.log(tabURL);
        });
    });
});