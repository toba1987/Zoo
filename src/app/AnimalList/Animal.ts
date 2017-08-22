import { Sector } from './Sector';

export class Animal{

    species: string;
    name: string;
    date: string;
    sector: Sector;

    constructor(species: string, name: string, date: string, sector?: Sector){
            this.species = species;
            this.name = name;
            this.date = date;
            this.sector = sector;
    }

    animalList(){
        return  this.species +" "+ this.name +" "+ this.date +" "+this.sector;
    }
}






