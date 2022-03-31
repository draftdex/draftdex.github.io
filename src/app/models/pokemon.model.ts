export class Pokemon {
    name: string;
    form: string;
    gmax: boolean;
    type1: string;
    type2: string;
    ability1: string;
    ability2: string;
    hiddenAbility: string;
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
    tier: string;
    available: boolean;
    team: string;

    constructor() {
        this.name = '';
        this.name = '';
        this.form = '';
        this.gmax = false;
        this.type1 = '';
        this.type2 = '';
        this.ability1 = '';
        this.ability2 = '';
        this.hiddenAbility = '';
        this.hp = 0;
        this.attack = 0;
        this.defense = 0;
        this.spAttack = 0;
        this.spDefense = 0;
        this.speed = 0;
        this.tier = '';
        this.available = false;
        this.team = '';
    }
}