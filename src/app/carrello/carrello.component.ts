// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-carrello',
//   templateUrl: './carrello.component.html',
//   styleUrls: ['./carrello.component.scss']
// })
// export class CarrelloComponent {


//   @Input() pizzaSelected: any;
//   // @Input() pizzaAdded: any;
//   @Input() pizze: any;
//   // @Output() pizzaAdded = new EventEmitter<any>(); //forse non dovrebbe esserci

//   carrello: any[] = [];

//   aggiungiPizzaAlCarrello(pizza: any) {
//     if (this.pizzaSelected) {
//       const pizzaNelCarrello = this.carrello.find(p => p.nome === this.pizzaSelected.nome);

//       if (pizzaNelCarrello) {
//         pizzaNelCarrello.quantita = (pizzaNelCarrello.quantita || 0) + 1;
//       } else {
//         this.carrello.push({ ...this.pizzaSelected, quantita: 1 });
//       }
//     }
//   }
  

//   calcolaTotale(): number {
//     let totale = 0;

//       totale += this.pizzaSelected.quantita * this.pizzaSelected.prezzo;

//     return totale;
//   }
// }



import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzeService } from '../pizze.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent {
  // @Input() pizzaSelected: any;
  @Input() pizzeNelCarrello: any[] = [];
  @Input() pizzaSelected: any[] = [];
  // @Output() pizzaRimossa = new EventEmitter<any>();
  // @Output() rimuoviPizzaDalCarrello = new EventEmitter<any>();

  carrello: any[] = [];

  // calcolaTotaleComplessivo(): number {
  //   return this.pizzeNelCarrello.reduce((total, pizza) => total + pizza.quantita * pizza.prezzo, 0);
  // }

  // rimuoviPizza(pizza: any): void {
  //   const pizzaNelCarrello = this.pizzeNelCarrello.find(p => p.nome === pizza.nome);

  //   if (pizzaNelCarrello) {
  //     if (pizzaNelCarrello.quantita > 1) {
     
  //       pizzaNelCarrello.quantita--;
  //     } else {
       
  //       const index = this.pizzeNelCarrello.indexOf(pizzaNelCarrello);
  //       this.pizzeNelCarrello.splice(index, 1);
  //     }


  //     this.rimuoviPizzaDalCarrello.emit(this.pizzeNelCarrello);
  //   }
  // }

  constructor(private pizzeService: PizzeService) {}

  calcolaTotaleComplessivo(): number {
    return this.pizzeService.calcolaTotaleComplessivo();
  }

  rimuoviPizza(pizza: any): void {
    this.pizzeService.rimuoviPizza(pizza);
  }
}
