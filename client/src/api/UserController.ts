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

import { User } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class UserController<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get the user with the given id.
   *
   * @tags user-controller
   * @name GetUser
   * @request GET:/user/{id}
   * @response `200` `User` the user with id id
   */
  getUser = (id: string, params: RequestParams = {}) =>
    this.http.request<User, any>({
      path: `/user/${id}`,
      method: 'GET',
      ...params
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name UpdateUser
   * @request PUT:/user/{id}
   * @response `200` `User` OK
   */
  updateUser = (id: string, data: User, params: RequestParams = {}) =>
    this.http.request<User, any>({
      path: `/user/${id}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name DeleteUser
   * @request DELETE:/user/{id}
   * @response `200` `void` OK
   */
  deleteUser = (id: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/user/${id}`,
      method: 'DELETE',
      ...params
    });
  /**
   * @description Get all the users
   *
   * @tags user-controller
   * @name GetUsers
   * @request GET:/user
   * @response `200` `(User)[]` the users list
   */
  getUsers = (params: RequestParams = {}) =>
    this.http.request<User[], any>({
      path: `/user`,
      method: 'GET',
      ...params
    });
  /**
   * No description
   *
   * @tags user-controller
   * @name CreateUser
   * @request POST:/user
   * @response `200` `User` OK
   */
  createUser = (data: User, params: RequestParams = {}) =>
    this.http.request<User, any>({
      path: `/user`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params
    });
}
