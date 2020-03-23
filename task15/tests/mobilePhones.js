import { elementWait } from "./yandexPage";

const checkbox = element(by.css('#local-offers-first'));
const delivery = element(by.xpath('//span[contains(text(), "С учётом доставки курьером")]'));
const price = element(by.css('input#glpriceto'));

export class MobilePhonesPage{
    clickOffersCheckbox() {
        expect(checkbox.isSelected()).toBe(false);
        checkbox.click();
        expect(checkbox.isSelected()).toBe(true);
    }
    setDelivery() {
        elementWait(delivery);
        delivery.click();
    }
    setPrice(text) {
        price.clear().sendKeys(text);
    }
    getPriceElement() {
        return price;
    }
    scrollDown() {
        browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
    }
}