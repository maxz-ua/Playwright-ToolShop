export class HomeLocators {
    public static get logo() { return '#logo'; }
    public static get header() { return 'h1.header'; }
    public static get subscribeButton() { return '.subscribe-btn'; }
    public static get searchBar() { return '//input[@placeholder=\'Search\']\n'; }
    public static get searchButton() { return '//button[@data-test=\'search-submit\' and text()=\'Search\']\n'; }
    public static get searchResultNotFound() { return '//div[@data-test=\'no-results\' and text()=\'There are no products found.\']\n'; }
}