import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuckService {

  private selectedValue: string = '';

  constructor() { }

  setSelectedPage(name: string){
    this.selectedValue = name;
  }
  getSelectedPage(){
    return this.selectedValue;
  }
}
