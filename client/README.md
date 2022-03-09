# typescript api generator test server

Used [this tool](https://github.com/acacode/swagger-typescript-api) to generate client API from openapi V3.   

### Build
`npm run build`
This will:
* generate the type script api in src/api
* compile TS using rollup (webpack sucks) 
* deploy to dist

### Launch
`npm run server`

Will start a [test server](http://localhost:8090/) on port 8090. It will proxy any resource not found to http://localhost:8080/ (no CORS needed).   


The `package.json` is where to look for to see how to integrate this tool in any project.