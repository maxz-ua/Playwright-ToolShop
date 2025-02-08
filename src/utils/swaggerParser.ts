import * as fs from 'fs';

export function getApiEndpoints(): any[] {
    const swaggerJson = JSON.parse(fs.readFileSync('swagger/swagger.json', 'utf8'));
    const paths = swaggerJson.paths;
    const apiEndpoints = [];

    for (const path in paths) {
        if (paths.hasOwnProperty(path)) {
            for (const method in paths[path]) {
                if (paths[path].hasOwnProperty(method)) {
                    apiEndpoints.push({
                        path,
                        method,
                        operationId: paths[path][method].operationId,
                    });
                }
            }
        }
    }
    return apiEndpoints;
}
