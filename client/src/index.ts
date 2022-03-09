import {UserController} from "./api/UserController";
import {HttpClient} from "./api/http-client";
import {User} from "./api/data-contracts";

window.onload = async () => {
    const ul = document.createElement('ul');
    document.body.append(ul);

    const log = (...messages: any[]): void => {
        const pre = document.createElement('pre');
        pre.textContent = messages.map(m => {
            if (typeof m !== "string")
                m = JSON.stringify(m, null, 2);
            return m;
        }).join(" ");
        const li = document.createElement('li');
        li.append(pre);
        ul.append(li);
    };

    const httpClient = new HttpClient({
        baseUrl: location.protocol + '//' + location.host + '/api',
        baseApiParams: {
            format: 'json'
        }
    });

    const userController = new UserController(httpClient);
    const users = (await userController.getUsers()).data;

    log("getUsers(): ", users);

    const userId = users[0].id;
    log(`getUser(${userId}): `, await userController.getUser(userId));

    const newUser = (await userController.createUser({
        id: '100',
        firstName: 'Some',
        lastName: 'One',
        birthDate: "1834-07-12",
        address: {
            street: 'Fighter',
            city: 'Zen',
            state: 'of the art',
            country: 'music rocks'
        }
    })).data;
    log("createUser(): ", newUser);

    const updatedUser = (await userController.updateUser(newUser.id,{
        ...newUser,
        address: {...newUser.address, country: 'music sucks'}
    })).data;
    log("updatedUser(): ", updatedUser);

    log("deleteUser(): ", await userController.deleteUser(updatedUser.id))
}
