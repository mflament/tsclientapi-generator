/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { GetPlanetsParams, Planet } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class PlanetController<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags planet-controller
   * @name GetPlanets
   * @request GET:/planet
   * @response `200` `(Planet)[]` OK
   */
  getPlanets = (query: GetPlanetsParams, params: RequestParams = {}) =>
    this.http.request<Planet[], any>({
      path: `/planet`,
      method: 'GET',
      query: query,
      ...params
    });
}
