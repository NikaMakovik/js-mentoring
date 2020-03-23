import {YandexPage} from './yandexPage.js';

const text = '1000';

describe('Actions on mobile phones page', () => {
    it('test', () => {
        let yandex = new YandexPage();
        yandex.gotoPage();
        let electronics = yandex.gotoElectronics();

        let mobileP = electronics.gotoMopilePhones();

        mobileP.clickOffersCheckbox();
        mobileP.setDelivery();
        mobileP.setPrice(text);
        
        expect(mobileP.getPriceElement().getAttribute('value')).toEqual(text);
        expect(mobileP.getPriceElement().getAttribute('type')).toEqual('text');

        mobileP.scrollDown();
    });
    afterAll(() => {
        browser.quit()
    });
  });  

