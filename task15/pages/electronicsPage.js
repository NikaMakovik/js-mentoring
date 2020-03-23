import { MobilePhonesPage } from "./mobilePhonesPage";
import { elementWait } from "../utils/waiters";

const mobilePhones = element(by.xpath('//li//a[contains(text(), "Мобильные телефоны")]'));

export class ElectronicsPage{
    gotoMopilePhones(){
        elementWait(mobilePhones);
        mobilePhones.click();
        return new MobilePhonesPage();
    }
    
}