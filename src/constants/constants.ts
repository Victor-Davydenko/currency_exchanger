import { IRoute } from "@/interfaces/interfaces";

export const routes: IRoute[] = [{title: 'Послуги', path: '/services'}, {title: 'Конвертер валют', path: '/converter'}, {title: 'Контакти', path: '/contacts'}, {title: 'Задати питання', path: 'ask'}]

export const CURRENCY_RATES_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&&date='