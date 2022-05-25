import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CarService {
    private carDescription : any;

    constructor() {
        this.carDescription = "";
    }

    public setCarDescription(val: any): void {
        this.carDescription = val;
    }

    public getCarDescription(): any {
        return this.carDescription;
    }
}