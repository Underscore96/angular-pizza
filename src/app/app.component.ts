import { Component, Input, OnInit } from '@angular/core';
import { PizzeService } from './pizze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  pizze: { nome: string, immagine: string, quantita: number, prezzo: number }[] = [];
  pizzaSelected: any[] = [];

  constructor(private pizzeService: PizzeService) {}



  ngOnInit() {
    this.pizze = this.pizzeService.getPizze();
  }

  addPizza(pizza: any): void {
    this.pizzaSelected = pizza;
    this.pizzeService.aggiungiPizzaAlCarrello(pizza);
  }

  aggiungiPizzaAlCarrello(pizza: any): void {
    this.pizzeService.aggiungiPizzaAlCarrello(pizza);
  }

  rimuoviPizzaDalCarrello(pizza: any): void {
    this.pizzeService.rimuoviPizza(pizza);
  }
}
