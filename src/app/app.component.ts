import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pizza';
  pizzaSelected: any;
  pizzeNelCarrello: any[] = [];
  @Input() pizze: any;



  addPizza(pizza: any) {
    this.pizzaSelected = pizza;
  }

  aggiungiPizzaAlCarrello(pizza: any) {
    // this.pizzeNelCarrello.push({ ...pizza, quantita: 1 });
    if (this.pizzaSelected) {
      const index = this.pizzeNelCarrello.findIndex(p => p.nome === this.pizzaSelected.nome);

      if (index !== -1) {
        this.pizzeNelCarrello[index].quantita += 1;
      } else {
        this.pizzeNelCarrello.push({ ...this.pizzaSelected, quantita: 1 });
      }
    }
  }

  
}
