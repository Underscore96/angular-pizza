
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private carrello: any[] = [];
  prodottoNelCarrello: any[] = [];


  aggiungiAlCarrello(prodotto: any): void {
      const prodottoNelCarrello = this.carrello.find((p: { nome: any; }) => p.nome === prodotto.nome);

    if (prodottoNelCarrello) {
      
      prodottoNelCarrello.quantita++;
    } else {
    
      this.carrello.push({ ...prodotto, quantita: 1 });
    }
    

    // this.carrello = [...this.carrello, { ...prodotto, quantita: 1 }];
}
  
  

  rimuoviDalCarrello(prodotto: any): void {
    const index = this.carrello.indexOf(prodotto);
    if (index !== -1) {
      this.carrello.splice(index, 1);
    }
  }

  getCarrello(): any[] {
    return this.carrello;
  }

  calcolaTotale(): number {
    return this.carrello.reduce((total: number, prodotto: { quantita: number; prezzo: number; }) => total + prodotto.quantita * prodotto.prezzo, 0);;
  }

  svuotaCarrello(): void {
    this.carrello = [];
  }
}
