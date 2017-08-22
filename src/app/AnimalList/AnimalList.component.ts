import { Component } from '@angular/core';

@Component({
    selector: 'app-animals',
    templateUrl: './AnimalList.component.html'
})
export class AnimalListComponent {
    //any omogucava da bude niz bilo cega, moze biti niz stringova, objekata ...
    private animals: any[];

    constructor() {

        this.animals = [
            {
                species: 'Dog',
                name: 'Doe',
                date: '2017-02-02',
            },
            {
                species: 'Cat',
                name: 'Mini',
                date: '2017-02-13',
            },
            {
                species: 'Wolf',
                name: 'Wol',
                date: 'jonh@gmail.com',
            },
            {
                species: 'Bird',
                name: 'Ben',
                date: '2017-02-04',
            },
            {
                species: 'Pig',
                name: 'Piggi',
                date: '2016-02-19',
            },
            {
                species: 'Horse',
                name: 'horen',
                date: '',
            }
        ];
    }
    remove(animal) {
        const index = this.animals.indexOf(animal);
        this.animals.splice(index, 1);
    }
}
