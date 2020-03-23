import { MobilePhonesPage } from "./mobilePhones";
import { elementWait } from "./yandexPage";

const mobilePhones = element(by.xpath('//li//a[contains(text(), "Мобильные телефоны")]'));

export class ElectronicsPage{
    gotoMopilePhones(){
        elementWait(mobilePhones);
        mobilePhones.click();
        return new MobilePhonesPage();
    }
    
}