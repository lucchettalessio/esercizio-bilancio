import { Component } from '@angular/core';

@Component({
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})
export class BilancioComponent {

  bilancio: number[] = [-9.90, 8.5, 8.4, 2.5, -2.6, 5.5];

  numero = 0;

  myContainer = "";

  aggiungiEntrata() {
    if(this.numero <= 0){
      alert("Non inserire numeri negativi")
    }
    else{
    this.bilancio.push(this.numero);
    this.numero = 0;
    }
  }

  aggiungiSpesa() {
    if(this.numero <= 0){
      alert("Non inserire numeri negativi")
    }
    else{
    document.getElementById("")
    this.bilancio.push(-this.numero);
    this.numero = 0;
    }
  }

  rimuoviMovimento(index: number) {
    this.bilancio.splice(index,1);
  }

  sommaMovimenti(){

    let somma = 0;

    for(let i of this.bilancio){
      somma += i;
    }

    return somma.toFixed(2);
  }

  totSpese(){

    let totSpese = 0;

    for(let i of this.bilancio){
      if(i < 0)
        totSpese += i;
    }
    return totSpese.toFixed(2);
  }
  
  totEntrate(){

    let totEntrate = 0;

    for(let i of this.bilancio){
      if(i > 0)
        totEntrate += i;
    }
    return totEntrate.toFixed(2);
  }


}
