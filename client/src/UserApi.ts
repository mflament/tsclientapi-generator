import {Fetcher} from "openapi-typescript-fetch";
import {paths} from "./api";

export const UserApi = (url = 'http://localhost:8080') =>  {
    const fetcher = Fetcher.for<paths>();
    fetcher.configure({baseUrl: url});
    return {
        getUsers: fetcher.path('/user').method('get').create(),
        findUserById: fetcher.path('/user/{id}').method('get').create(),
        createUser: fetcher.path('/user').method('post').create(),
        updateUser: fetcher.path('/user/{id}').method('put').create(),
        deleteUser: fetcher.path('/user/{id}').method('delete').create(),
    };
}
