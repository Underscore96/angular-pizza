import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent {


  @Input() pizzaSelected: any;
  // @Input() pizzaAdded: any;
  @Input() pizze: any;
  // @Output() pizzaAdded = new EventEmitter<any>(); // non dovrebbe esserci

  carrello: any[] = [];

  aggiungiPizzaAlCarrello(pizza: any) {
    if (this.pizzaSelected) {
      const pizzaNelCarrello = this.carrello.find(p => p.nome === this.pizzaSelected.nome);

      if (pizzaNelCarrello) {
        pizzaNelCarrello.quantita = (pizzaNelCarrello.quantita || 0) + 1;
      } else {
        this.carrello.push({ ...this.pizzaSelected, quantita: 1 });
      }
    }
  }
  

  calcolaTotale(): number {
    let totale = 0;

      totale += this.pizzaSelected.quantita * this.pizzaSelected.prezzo;

    return totale;
  }
}



