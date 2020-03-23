export function elementWait(elem, maxWaitTime = 10000) {
    elem.isDisplayed()
    .then(
        null,
        error => {
            if (maxWaitTime > 0) {
                browser.sleep(1000);
                elementWait(elem, maxWaitTime-1000);
            }
            else if(maxWaitTime <= 0) throw error;
        });
    
    // browser.wait(() => elem.isDisplayed(), delay)
}