export interface OpenAPI {
    openapi: string;
    info: Information;
    servers?: Server[];
    paths: { [path: string]: PathItem };
    components?: Components;
    security?: [SecurityRequirement];
    tags?: [Tag];
    externalDocs?: [ExternalDocumentation];
}

export interface Components {
    schemas: { [name: string]: Schema | Reference };
    responses: { [name: string]: Response | Reference };
    parameters: { [name: string]: Parameter | Reference };
    examples: { [name: string]: Example | Reference };
    requestBodies: { [name: string]: RequestBody | Reference };
    headers: { [name: string]: Header | Reference };
    securitySchemes: { [name: string]: SecurityScheme | Reference };
    links: { [name: string]: Link | Reference };
    callbacks: { [name: string]: Callback | Reference };
}

export type Schema = any;

export interface Information {
    title: string;
    version: string;
    description?: string;
}

export interface Server {
    url: string;
    description?: string;
    variables: { [name: string]: ServerVariable }
}

export interface ServerVariable {
    default: string;
    description?: string;
    enum?: string[];
}

export interface PathItem {
    $ref?: string;
    summary?: string;
    description?: string;
    servers?: Server[];
    get?: Operation;
    put?: Operation;
    post?: Operation;
    delete?: Operation;
    options?: Operation;
    head?: Operation;
    patch?: Operation;
    trace?: Operation;
    parameters: [Parameter | Reference];
}

export interface Operation {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
    operationId?: string;
    parameters: [Parameter | Reference];
    requestBody: [RequestBody | Reference];
    responses: { [status: string]: Response | Reference };
    callbacks?: { [identifier: string]: Callback | Reference }
    deprecated?: boolean;
    security?: SecurityRequirement;
    servers?: [Server];
}

export interface ExternalDocumentation {
    description: string;
    url: string;
}

export interface Response {
    description: string;
    headers?: { [name: string]: Header | Reference };
    content?: { [name: string]: MediaType | Reference };
    links?: { [name: string]: Link | Reference };
}

export interface Header {
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: Style;
    explode?: boolean;
    allowReserved?: boolean;

    schema?: Schema | Reference;
    content?: { [name: string]: MediaType };

    example?: any;
    examples?: [Example | Reference];
}

export interface Parameter extends Header {
    name: string;
    in: ParameterLocation;
}

export type ParameterLocation = 'path' | 'query' | 'header' | 'cookie';

export type Style = 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';

export type Reference = { $ref: string; }

export interface RequestBody {
    description?: string;
    content?: { [mediaType: string]: MediaType };
    required?: boolean;
}

export type Callback = {
    [expression: string]: PathItem;
}

export interface SecurityScheme {
    type: string;
    description?: string;
    name: string;
    in: 'query' | 'header' | 'cookie';
    scheme: string;
    bearerFormat?: string;
    flows: OAuthFlow;
    openIdConnectUrl?: string;
}

export interface OAuthFlow {
    authorizationUrl: string;
    tokenUrl: string;
    refreshUrl?: string;
    scopes: { [name: string]: string };
}

export type SecurityRequirement = {
    [name: string]: string[]
}

export interface Tag {
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
}

export interface Link {
    operationRef?: string;
    operationId?: string;
    parameters?: { [name: string]: any };
    requestBody?: any;
    description?: string;
    server?: Server;
}

export interface MediaType {
    schema?: Schema | Reference;
    example?: any;
    examples?: { [mediaType: string]: Example | Reference };
    encoding?: { [propertyName: string]: Encoding };
}

export interface Encoding {
    contentType?: string;
    headers?: { [header: string]: Header | Reference };
    style?: Style;
    explode?: boolean;
    allowReserved?: boolean;
}

export interface Example {
    summary?: string;
    description?: string;
    value?: any;
    externalValue?: string;
}
