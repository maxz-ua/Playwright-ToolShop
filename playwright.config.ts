import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: 'src/tests', // Test folder
    use: {
        baseURL: 'http://localhost', // Optional: Set a base URL for tests
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
});
