import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {
  pizzeNelCarrello: any[] = [];
  pizzaSelected: any[] = [];
  rimuoviPizzaDalCarrello = new EventEmitter<any>();

  constructor() { 
    this.pizzeNelCarrello = [];
  }

  getPizze(): any[] {
    return [
        { nome: 'Margherita', immagine: 'https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format', quantita: 0, prezzo: 10 },
        { nome: 'Pepperoni', immagine: 'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Square-1300x1300', quantita: 0,  prezzo: 13 },
        { nome: 'Vegetariana', immagine: 'https://blog.giallozafferano.it/maniamore/wp-content/uploads/2015/06/pizza-ratatouille.jpg', quantita: 0,  prezzo: 14 }
    ];
              
  }


  addPizza(pizza: any): void {
    
    const pizzaIndex = this.pizzeNelCarrello.findIndex((p: { nome: any; }) => p.nome === pizza.nome);

    if (pizzaIndex !== -1) {
    
      this.pizzeNelCarrello[pizzaIndex].quantita++;
    } else {
      
      this.pizzeNelCarrello.push({ ...pizza, quantita: 1 });
    }
  }

  aggiungiPizzaAlCarrello(pizza: any): void {
    this.addPizza(pizza);
  }


  calcolaTotaleComplessivo(): number {
    return this.pizzeNelCarrello.reduce((total: number, pizza: { quantita: number; prezzo: number; }) => total + pizza.quantita * pizza.prezzo, 0);
  }

  rimuoviPizza(pizza: any): void {
    const pizzaNelCarrello = this.pizzeNelCarrello.find((p: { nome: any; }) => p.nome === pizza.nome);

    if (pizzaNelCarrello) {
      if (pizzaNelCarrello.quantita > 1) {
     
        pizzaNelCarrello.quantita--;
      } else {
       
        const index = this.pizzeNelCarrello.indexOf(pizzaNelCarrello);
        this.pizzeNelCarrello.splice(index, 1);
      }


      this.rimuoviPizzaDalCarrello.emit(this.pizzeNelCarrello);
    }
  }
}
