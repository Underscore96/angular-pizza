// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   pizze = [
//     { nome: 'Margherita', immagine: '....', quantita: 0, prezzo: 10 },
//     { nome: 'Pepperoni', immagine: '...', quantita: 0,  prezzo: 13 },
//     { nome: 'Vegetariana', immagine: '...', quantita: 0,  prezzo: 14 }
//   ];
//   title = 'angular-pizza';
//   pizzaSelected: any;
//   // pizzeNelCarrello: any[] = [];
//   pizzeNelCarrello = [];
//   // @Input() pizze: any;



//   addPizza(pizza: any) {
//     this.pizzaSelected = pizza;
//   }

// }




import { Component, Input } from '@angular/core';
import { PizzeService } from './pizze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private pizzeService: PizzeService) {
    this.pizze = pizzeService.getPizze();
  }


  pizze: { nome: string, immagine: string, quantita: number, prezzo: number }[] = [
    { nome: 'Margherita', immagine: '...', quantita: 0, prezzo: 10 },
    { nome: 'Pepperoni', immagine: '...', quantita: 0, prezzo: 13 },
    { nome: 'Vegetariana', immagine: '...', quantita: 0, prezzo: 14 }
  ];

  pizzaSelected: any[] = [];

  pizzeNelCarrello: any;



  // addPizza(pizza: any): void {
    
  //   const pizzaIndex = this.pizzeNelCarrello.findIndex(p => p.nome === pizza.nome);

  //   if (pizzaIndex !== -1) {
    
  //     this.pizzeNelCarrello[pizzaIndex].quantita++;
  //   } else {
      
  //     this.pizzeNelCarrello.push({ ...pizza, quantita: 1 });
  //   }
  // }

  // aggiungiPizzaAlCarrello(pizza: any): void {
  //   this.addPizza(pizza);
  // }

  // rimuoviPizzaDalCarrello(carrello: any[]): void {
  //   this.pizzeNelCarrello = carrello;
  // }
  // aggiungiPizzaAlCarrello(pizza: any): void {
  //   this.addPizza(pizza);
  // }

  // rimuoviPizzaDalCarrello(carrello: any[]): void {
  //   this.pizzeNelCarrello = carrello;
  // }

  addPizza(pizza: any): void {
    this.pizzaSelected = pizza;
    this.pizzeService.aggiungiPizzaAlCarrello(pizza);
  }

  // pizzeNelCarrello(): { nome: string, immagine: string, quantita: number, prezzo: number }[] {
  //   return this.pizzeService.pizzeNelCarrello();
  // }

  aggiungiPizzaAlCarrello(pizza: any): void {
    this.pizzeService.aggiungiPizzaAlCarrello(pizza);
  }

  rimuoviPizzaDalCarrello(pizza: any): void {
    this.pizzeService.rimuoviPizza(pizza);
  }
  
}


