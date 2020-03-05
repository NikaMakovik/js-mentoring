const YANDEX = 'https://yandex.by/';
const changeLocationButton = by.css('.geolink__reg');
const inputLocation = by.css('input.input__control.input__input');
const moreButton = by.css('a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher');
const moreMenu = by.css('div.home-tabs__more');

function changeTab() {
    browser.getAllWindowHandles().then((handles) => {
        expect(handles.length).toEqual(2);
        browser.close();
        browser.switchTo().window(handles[1])
    });
}

function changeLocation(location) {
    element(changeLocationButton).click();
    changeTab();

    element(inputLocation).clear().sendKeys(location);
        
    // browser.sleep(1000);
    elementWaitClick(by.xpath(`//div[contains(text(), '${location}')]`));
        
    browser.sleep(1000);
}

function elementWaitClick(path) {
    let elem = element(path);
    browser.wait(() => elem.isPresent(), 5000)
    elem.click();
}

describe('Changing locations and compare menus', () => {
    it('test', () => {
        browser.ignoreSynchronization = true;
        browser.get(YANDEX);
        
        //get more menu info from London location
        changeLocation('London');
        elementWaitClick(moreButton);
        let moreLondon = element.all(moreMenu);

        //get more menu info from Paris location
        changeLocation('Paris');
        elementWaitClick(moreButton);
        let moreParis = element.all(moreMenu);
        
        //menu elements should be equal
        expect(moreLondon.getText()).toEqual(moreParis.getText());
    });
  }); 