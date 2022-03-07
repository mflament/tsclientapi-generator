import './fetch-polyfill';
import {UserApi} from './UserApi';
import {components} from "./api";

type User = components["schemas"]["User"];
type Address = components["schemas"]["Address"];

function isUser(o: any): o is User {
    const u = o as Partial<User>;
    return u && typeof u.id === 'string' && typeof u.firstName === 'string' && typeof u.lastName === 'string' && typeof u.birthDate === 'string' && isAddress(u.address);
}

function isAddress(o: any): o is Address {
    const a = o as Partial<Address>;
    return a && typeof a.street === 'string' && typeof a.city === 'string' && typeof a.state === 'string' && typeof a.country === 'string';
}

const userApi = UserApi();
userApi.getUsers({}).then(response => {
    console.log(response);
    const users = response.data as User[];
    for (const user of users) {
        if (!isUser(user)) throw new Error("Not a user " + user);
    }
});
