console.log('9u8h087y')

/* global chrome */

const buttonClicked = (tab) => {
    let msg = {
        text: 'hello'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

chrome.action.onClicked.addListener(buttonClicked)