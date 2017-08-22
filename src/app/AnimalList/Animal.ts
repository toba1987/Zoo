export class Animal{

    species: string;
    name: string;
    date: string;

    constructor(species: string, name: string, date: string){
            this.species = species;
            this.name = name;
            this.date = date;
    }

    animalList(){
        return  this.species +" "+ this.name +" "+ this.date;
    }
}






