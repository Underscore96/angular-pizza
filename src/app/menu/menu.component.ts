import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PizzeService } from '../pizze.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() pizzaAdded = new EventEmitter<any>();
  pizze: any[] = [];

  constructor(private pizzeService: PizzeService) {}

  ngOnInit() {
    this.pizze = this.pizzeService.getPizze();
  }

  aggiungiPizzaAlCarrello(pizza: any): void {
    this.pizzaAdded.emit(pizza);
  }
}
