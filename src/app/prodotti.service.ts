
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {


  // constructor() { 
  //   this.prodottoNelCarrello = [];
  // }



  // prodottoSelected: any[] = [];
  // prodottoNelCarrello: any[] = [];

  
  private pizze: any[] = [
    { nome: 'Margherita', immagine: 'https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format', quantita: 0, prezzo: 10 },
    { nome: 'Pepperoni', immagine: 'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Square-1300x1300', quantita: 0,  prezzo: 13 },
    { nome: 'Vegetariana', immagine: 'https://blog.giallozafferano.it/maniamore/wp-content/uploads/2015/06/pizza-ratatouille.jpg', quantita: 0,  prezzo: 14 }

  ];

  private bibite: any[] = [
    { nome: 'Coca-cola', immagine: 'https://media.istockphoto.com/id/1062831310/it/foto/versare-la-bibita-analcolica-in-vetro-con-spruzzi-di-ghiaccio-su-sfondo-scuro.jpg?s=612x612&w=0&k=20&c=OQdSS32U4bLRBkxdPTsjXWQKfIUDtdDikaFwS24Kwxs=', quantita: 0, prezzo: 2 },
    { nome: 'Fanta', immagine: 'https://assets.turbologo.com/blog/it/2020/02/19132930/Fanta-bottle-958x575.png', quantita: 0,  prezzo: 1 },
    { nome: 'Succo' + ' '+'di'+ ' ' +'frutta', immagine: 'https://www.fattoincasadabenedetta.it/wp-content/uploads/2017/09/succodifruttaallapescaSITOYOUTUBE2.jpg', quantita: 0,  prezzo: 3 }
  ];

  

  getPizze(): any[] {
    return this.pizze;
  }

  getBibite(): any[] {
    return this.bibite;
  }


  
  getProdotti(): any[] {
    return [...this.pizze, ...this.bibite];
  }
}
