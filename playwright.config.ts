import {defineConfig} from '@playwright/test';

const config = defineConfig({
    testDir: './tests', // Test folder
    reporter: [["line"], ["allure-playwright"]],
    timeout: 60000,
    fullyParallel: true, // Run all tests in parallel.
    projects: [
        {
            name: 'chromium_ui', // Name of the web testing project
            testDir: './tests/ui', // Path to your web tests directory
            use: {
                // Web test configuration
                headless: false, // Run tests in headless mode for web
                browserName: 'chromium', // You can change this to 'firefox' or 'webkit' for other browsers
                baseURL: 'https://practicesoftwaretesting.com/', // Base URL for web tests
                screenshot: 'only-on-failure', // Take screenshots on failure
             //   video: 'retain-on-failure', // Record videos for failing tests
            },
        },

        {
            name: 'firefox_ui',  // Firefox project
            testDir: './tests/ui',  // Path to web tests
            use: {
                headless: true,   // Run in headless mode for browsers
                browserName: 'firefox',  // Use Firefox browser for this project
                baseURL: 'https://practicesoftwaretesting.com/',  // Base URL for web tests
                screenshot: 'only-on-failure',  // Screenshot on failure
              //  video: 'retain-on-failure',  // Record video on failure
            },
        },

        {
            name: 'api', // Name of the API testing project
            testDir: './tests/api', // Path to your API tests directory
            use: {
                // API test configuration
                baseURL: 'https://petstore.swagger.io/v2', // Base URL for API tests
                headless: false, // No need for a browser in API tests
                browserName: 'firefox', // It's irrelevant for API testing, but you need to specify it
                contextOptions: {
                    acceptDownloads: true, // Enable downloads for API testing if needed
                },
            },
        },
    ],
});

console.log("Test configuration:", config);

export default config;