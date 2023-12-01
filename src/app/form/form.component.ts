import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  indirizzo: string = '';
  nome: string = '';
  cognome: string = '';
  isFormVisible: boolean | undefined;

  inviaForm(): void {
    console.log('Form inviato!');
    console.log('Indirizzo:', this.indirizzo);
    console.log('Nome:', this.nome);
    console.log('Cognome:', this.cognome);
  }

  mostraForm(): void {
    this.isFormVisible = true;
  }

  nascondiForm(): void {
    this.isFormVisible = false;
  }
  

}
