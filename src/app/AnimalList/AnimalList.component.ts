import { Component } from '@angular/core';
import { Animal } from './Animal';
import { Sector } from './Sector';

@Component({
    selector: 'app-animals',
    templateUrl: './AnimalList.component.html'
})
export class AnimalListComponent {
    //any omogucava da bude niz bilo cega, moze biti niz stringova, objekata ...
    private animals: any[];
    private newAnimal: Animal = new Animal('', '', '');
    private sectors: Sector[];
    constructor() {

        this.sectors = [
            new Sector('Sector 1', '20'),
            new Sector('Sector 2', '30'),
            new Sector('Sector 3', '40'),

        ];

        this.animals = [
            new Animal("Dog", "Doe","2017-03-04", this.sectors[0]),
            new Animal("Cat", "Cat","2017-05-06", this.sectors[0]),
            new Animal("Pig", "Doe","2017-06-14", this.sectors[2]),
            new Animal("Horse", "Doe","", this.sectors[1]),
            new Animal("Bird", "Doe","2017-08-07", this.sectors[1])
        ];

    }

    remove(animal) {
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
    }

    moveToTopAnimal(animal) {
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
        this.animals.unshift(animal);
    }

    addAnimal() {
       this.animals.push(this.newAnimal);
       this.newAnimal = new Animal('', '', '');
    }
}
