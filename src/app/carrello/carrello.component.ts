// import { Component, Input, OnInit } from '@angular/core';
// import { PizzeService } from '../pizze.service';

// @Component({
//   selector: 'app-carrello',
//   templateUrl: './carrello.component.html',
//   styleUrls: ['./carrello.component.scss']
// })
// export class CarrelloComponent implements OnInit {
//   @Input() pizzaSelected: any[] = [];

//   carrello: any[] = [];
//   pizzeNelCarrello: any;


//   constructor(private pizzeService: PizzeService) {}

//   ngOnInit() {
//     this.pizzeNelCarrello = this.pizzeService.pizzeNelCarrello;
//   }

//   calcolaTotaleComplessivo(): number {
//     return this.pizzeService.calcolaTotaleComplessivo();
//   }

//   rimuoviPizza(pizza: any): void {
//     this.pizzeService.rimuoviPizza(pizza);
//   }
// }




import { Component, Input, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  // @Input() pizzeNelCarrello: any[] = [];
  @Input() prodottoSelected: any[] = [];
  carrello: any[] = [];
  

  constructor(private prodottiService: ProdottiService, private carrelloService: CarrelloService) {}

  ngOnInit() {

    // this.carrello = this.carrelloService.getCarrello();
    this.carrello = this.carrelloService.getCarrello();
 
  }

  calcolaTotaleComplessivo(): number {

    return this.carrelloService.calcolaTotale();
  }

  rimuoviProdotto(prodotto: any): void {

    this.carrelloService.rimuoviDalCarrello(prodotto);
  }

}

