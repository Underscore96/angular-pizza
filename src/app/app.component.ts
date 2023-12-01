// import { Component, Input, OnInit } from '@angular/core';
// import { PizzeService } from './pizze.service';
// import { NavigationEnd, Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
 

//   AppBibite: boolean = false;
//   pizze: { nome: string, immagine: string, quantita: number, prezzo: number }[] = [];
//   pizzaSelected: any[] = [];

//   constructor(private pizzeService: PizzeService, public router: Router) {}

//   ngOnInit() {
//     this.pizze = this.pizzeService.getPizze();
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         this.AppBibite = event.url === '/bibite';

//       }
//     });
    
//   }
  
//   addPizza(pizza: any): void {
//     this.pizzaSelected = pizza;
//     this.pizzeService.aggiungiPizzaAlCarrello(pizza);
//   }

//   aggiungiPizzaAlCarrello(pizza: any): void {
//     this.pizzeService.aggiungiPizzaAlCarrello(pizza);
//   }

//   rimuoviPizzaDalCarrello(pizza: any): void {
//     this.pizzeService.rimuoviPizza(pizza);
//   }
  
//     navigaAlleBibite() {
//       this.router.navigate(['/bibite']);
//     }


//     aAppBibite() {

//       this.AppBibite = true;
//     }
// }


import { Component, OnInit } from '@angular/core';
import { ProdottiService } from './prodotti.service';
import { CarrelloService } from './carrello.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  AppBibite: boolean = false;
  prodotti: { nome: string, immagine: string, quantita: number, prezzo: number }[] = [];
  prodottoSelected: any;

  constructor(private prodottiService: ProdottiService, private carrelloService: CarrelloService, public router: Router) {}

  ngOnInit() {

    this.prodotti = this.prodottiService.getPizze().concat(this.prodottiService.getBibite());

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.AppBibite = event.url === '/bibite';
      }
    });
  }

  aggiungiAlCarrello(prodotto: any): void {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }

  navigaAlleBibite() {
    this.router.navigate(['/bibite']);
  }

  aAppBibite() {
    this.AppBibite = true;
  }
  
}

