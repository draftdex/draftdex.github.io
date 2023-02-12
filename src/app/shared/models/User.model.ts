export class User {
    username: string;
    password: string;
    id?: string;
    firstname?: string;
    lastname?: string;
    team?: string;
    fullteamname?: string;

    constructor(username: string, password: string, team?: string, id?: string, firstname?: string, lastname?: string, fullteamname?: string) {
        this.username = username;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.team = team;
        this.fullteamname = fullteamname;
    }

    static getGuestAccount(): User {
        const newUser =  new User('Guest', '', 'WW');
        newUser.id = '99999';
        return newUser;
    }
}

export interface NewUser {
    team: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}