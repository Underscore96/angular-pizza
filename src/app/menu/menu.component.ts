import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  @Output() pizzaAdded = new EventEmitter<any>();


  pizze = [
    { nome: 'Margherita', immagine: 'https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format', quantita: 0, prezzo: 10 },
    { nome: 'Pepperoni', immagine: 'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Square-1300x1300', quantita: 0,  prezzo: 13 },
    { nome: 'Vegetariana', immagine: 'https://blog.giallozafferano.it/maniamore/wp-content/uploads/2015/06/pizza-ratatouille.jpg', quantita: 0,  prezzo: 14 }
  ];


  aggiungiPizzaAlCarrello(pizza: any) {
    pizza.quantita++;
    this.pizzaAdded.emit(pizza);
  }


}


  


