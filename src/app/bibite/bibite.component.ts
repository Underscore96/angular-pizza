// import { Component, EventEmitter, Output } from '@angular/core';
// import { PizzeService } from '../pizze.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-bibite',
//   templateUrl: './bibite.component.html',
//   styleUrls: ['./bibite.component.scss']
// })
// export class BibiteComponent {

//   constructor(private route: ActivatedRoute, private service: PizzeService) {}


//   @Output() bibitaAdded = new EventEmitter<any>();




//   bibite = [
//     { nome: 'Coca-cola', immagine: 'https://media.istockphoto.com/id/1062831310/it/foto/versare-la-bibita-analcolica-in-vetro-con-spruzzi-di-ghiaccio-su-sfondo-scuro.jpg?s=612x612&w=0&k=20&c=OQdSS32U4bLRBkxdPTsjXWQKfIUDtdDikaFwS24Kwxs=', quantita: 0, prezzo: 2 },
//     { nome: 'Fanta', immagine: 'https://assets.turbologo.com/blog/it/2020/02/19132930/Fanta-bottle-958x575.png', quantita: 0,  prezzo: 1 },
//     { nome: 'Succo' + ' '+'di'+ ' ' +'frutta', immagine: 'https://www.fattoincasadabenedetta.it/wp-content/uploads/2017/09/succodifruttaallapescaSITOYOUTUBE2.jpg', quantita: 0,  prezzo: 3 }
//   ];



//   aggiungiBibitaAlCarrello(bibita: any): void {
//     this.bibitaAdded.emit(bibita);
//   }
//   }


import { Component } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { CarrelloService } from '../carrello.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bibite',
    templateUrl: './bibite.component.html',
    styleUrls: ['./bibite.component.scss'],
})
export class BibiteComponent {
    bibite: any[] = [];

  constructor(private prodottiService: ProdottiService, private carrelloService: CarrelloService, private route: ActivatedRoute) {}

  ngOnInit() {
        this.bibite = this.prodottiService.getBibite();
      }

  aggiungiAlCarrello(prodotto: any) {
    this.carrelloService.aggiungiAlCarrello(prodotto);
  }
}




