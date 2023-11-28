import { Component, Input, OnInit } from '@angular/core';
import { PizzeService } from '../pizze.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  @Input() pizzaSelected: any[] = [];

  carrello: any[] = [];
  pizzeNelCarrello: any;


  constructor(private pizzeService: PizzeService) {}

  ngOnInit() {
    this.pizzeNelCarrello = this.pizzeService.pizzeNelCarrello;
  }

  calcolaTotaleComplessivo(): number {
    return this.pizzeService.calcolaTotaleComplessivo();
  }

  rimuoviPizza(pizza: any): void {
    this.pizzeService.rimuoviPizza(pizza);
  }
}
