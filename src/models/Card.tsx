export class Card {

    id?: number;
    name: string;
    password: string;

    constructor(name: string, password: string, id?: number) {
        this.name = name;
        this.password = password;
        this.id = id;
    }

}