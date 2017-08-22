import { Component } from '@angular/core';
import { Animal } from './Animal';
@Component({
    selector: 'app-animals',
    templateUrl: './AnimalList.component.html'
})
export class AnimalListComponent {
    //any omogucava da bude niz bilo cega, moze biti niz stringova, objekata ...
    private animals: any[];

    constructor() {

        this.animals = [
            new Animal("Dog", "Doe","2017-03-04"),
            new Animal("Cat", "Cat","2017-05-06"),
            new Animal("Pig", "Doe","2017-06-14"),
            new Animal("Horse", "Doe",""),
            new Animal("Bird", "Doe","2017-08-07")

        ];


    }
    remove(animal) {
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
    }
}
