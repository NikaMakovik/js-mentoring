import { ElectronicsPage } from "./electronicsPage";

const YANDEX = 'https://market.yandex.by/';

const menu = element(by.css('div[data-zone-name="all-categories"]'));
const electronics = element(by.xpath('//a/img[@alt="Электроника"]'));


export class YandexPage{
    gotoPage() {
        browser.get(YANDEX);
    }
    gotoElectronics() {
        elementWait(menu);
        menu.click();
        elementWait(electronics);
        electronics.click();
        return new ElectronicsPage();
    }
}

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