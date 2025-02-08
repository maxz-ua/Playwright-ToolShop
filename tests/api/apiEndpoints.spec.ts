import {test, expect, APIRequestContext} from '@playwright/test';
import { getApiEndpoints } from '../../src/utils/swaggerParser';

const apiEndpoints = getApiEndpoints();

apiEndpoints.forEach(({path, method, operationId }) => {
    test(`${operationId} - ${method.toUpperCase()} ${path}`, async ({ request }: { request: APIRequestContext } , config) => {
        const endpoint = `${config.project.use.baseURL}${path}`;
        console.log(`GET endpoint: ${endpoint}`);
        let response;

        // Use explicit HTTP method calls instead of dynamic access
        switch (method.toLowerCase()) {
            case 'get':
                response = await request.get(endpoint);
                break;
            case 'post':
                response = await request.post(endpoint);
                break;
            case 'put':
                response = await request.put(endpoint);
                break;
            case 'delete':
                response = await request.delete(endpoint);
                break;
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }

        expect(response.status()).toBeGreaterThanOrEqual(200);
        expect(response.status()).toBeLessThanOrEqual(299);
    });
});
