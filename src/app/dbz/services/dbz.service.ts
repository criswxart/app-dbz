import { Injectable } from "@angular/core";
import { Personaje } from '../interface/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 3123
        },
        {
          nombre: 'Vegeta',
          poder: 32193
        },
    ];
    get personajes(): Personaje[] {
        // rompe la referencia con el objeto personajes y crea uno nuevo con el Spread operator
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push( personaje );
    }

}