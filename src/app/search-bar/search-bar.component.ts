import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdottiService } from '../prodotti.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  prodotti: any;
  filteredProdotti: any;
  searchTerm: any;


  constructor(private prodottiService: ProdottiService, private router: Router) {}

  ngOnInit() {
    this.prodottiService.getProdotti().push((prodotti: any) => {
      this.prodotti = prodotti;
      this.filteredProdotti = this.prodotti;
    });
  }




  filterItems() {
    if (!this.searchTerm) {
      this.filteredProdotti = this.prodotti;
    } else {
      this.filteredProdotti = this.prodotti.filter((prodotto: { nome: string; }) =>
        prodotto.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
