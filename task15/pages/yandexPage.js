import { ElectronicsPage } from "./electronicsPage";
import { elementWait } from "../utils/waiters";

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
