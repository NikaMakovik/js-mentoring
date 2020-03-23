const YANDEX = 'https://yandex.by/';
const changeLocationButton = by.css('.geolink__reg');
const inputLocation = by.css('input.input__control.input__input');
const moreButton = by.css('a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher');
const moreMenu = by.css('div.home-tabs__more');
let delay = 1000;
function changeTab() {
    browser.getAllWindowHandles().then((handles) => {
        expect(handles.length).toEqual(2);
        browser.close();
        browser.switchTo().window(handles[1])
    });
}

function changeLocation(location) {
    // element(changeLocationButton).click();
    elementWaitClick(changeLocationButton);
    changeTab();

    element(inputLocation).clear().sendKeys(location);
        
    elementWaitClick(by.xpath(`//div[contains(text(), '${location}')]`));
}

function waitForElement(locator, maxWaitTime) {
    locator.isDisplayed()
    .then(
        null,
        error => {
            if (maxWaitTime > 0) {
                browser.sleep(1000);
                waitForElement(locator, maxWaitTime-1000);
            }
            else if(maxWaitTime <= 0) throw error;
        });

    
    // locator.isPresent()
    // .then(result => {
    //     if (!result && maxWaitTime > 0) {
    //         browser.sleep(1000);
    //         waitForElement(locator, maxWaitTime-1000);
    //     }
    //     else if(maxWaitTime <= 0) throw "no such element";
    // })
}

function elementWaitClick(path) {
    let elem = element(path);
    // browser.wait(() => elem.isPresent(), 5000)
    waitForElement(elem, 20500)
    
    elem.click();
    // browser.sleep(7000);
    
}

describe('Changing locations and compare menus', () => {
    it('test', () => {
        browser.ignoreSynchronization = true;
        browser.get(YANDEX);

        let a = element(by.xpath(`//div[contains(text(), 'GKNDLGKSND')]`))
        waitForElement(a, 6020)

        // get more menu info from London location
        changeLocation('London');
        
        elementWaitClick(moreButton);
        let moreLondon = element.all(moreMenu);

        // get more menu info from Paris location
        changeLocation('Paris');
        elementWaitClick(moreButton);
        let moreParis = element.all(moreMenu);
        
        //menu elements should be equal
        expect(moreLondon.getText()).toEqual(moreParis.getText());
    });
})