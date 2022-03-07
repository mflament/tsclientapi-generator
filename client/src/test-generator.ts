import {generate} from "./generator/ApiGenerator";
import fetch from "node-fetch";
import {OpenAPI} from "./generator/OpenAPI";

fetch('http://localhost:8080/v3/api-docs').then(response => {
    if (response.status === 200)
        return response.buffer().then(b => JSON.parse(b.toString()) as OpenAPI);
    throw new Error(response.status + " " + response.statusText);
}).then(openapi => {
    console.log(Object.keys(openapi.paths));
    generate({api: openapi, targetDir: 'src/api'}).then(() => console.log('done')).catch(console.error);
});

