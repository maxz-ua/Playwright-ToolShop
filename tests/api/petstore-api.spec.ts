import { test, expect } from '@playwright/test';

test.describe('Petstore API Tests', () => {

    test('Get pet by status', async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/pet/findByStatus?status=available`, {
            headers: { 'X-Swagger-Coverage': 'true' }
        });

        expect(response.status()).toBe(200);

        const pets = await response.json();
        console.log(`✅ Found ${pets.length} pets`);
        expect(pets.length).toBeGreaterThan(0);
    });

    test('Add a new pet', async ({ request, baseURL }) => {
        const petData = {
            id: 9999,
            name: "SwaggerTestPet",
            status: "available"
        };

        const response = await request.post(`${baseURL}/pet`, {
            headers: { 'Content-Type': 'application/json', 'X-Swagger-Coverage': 'true' },
            data: petData
        });

        expect(response.status()).toBe(200);

        const responseData = await response.json();
        expect(responseData.name).toBe("SwaggerTestPet");
    });

    test('Delete pet', async ({ request, baseURL }) => {
        const response = await request.delete(`${baseURL}/pet/9999`, {
            headers: { 'X-Swagger-Coverage': 'true' }
        });

        expect(response.status()).toBe(200);
    });

});
