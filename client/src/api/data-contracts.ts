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

export interface Address {
  street: string;
  state: string;
  city: string;
  country: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;

  /** @format date */
  birthDate: string;
  address: Address;
}

export interface Planet {
  name?: string;

  /** @format int32 */
  diameterKms?: number;

  /** @format int64 */
  averageDistanceToSun?: number;
}

export interface GetPlanetsParams {
  name?: string;
}
