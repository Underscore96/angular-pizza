import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  indirizzo: string = '';
  nome: string = '';
  cognome: string = '';
  cap: number | undefined;
  citta: string | undefined;
  isFormVisible: boolean | undefined;
  submitAttempted: boolean | undefined;
  submitSuccess: boolean | undefined;
  successMessage: string = 'Form compilata con successo!';

  inviaForm(form: NgForm) {
    if (form.invalid) {
      this.submitAttempted = true;
      return; 
    }
    const formValues = form.value;
    console.log(formValues);
    this.submitSuccess = true;
    this.submitAttempted = false;
  }

  mostraForm(): void {
    this.isFormVisible = true;
  }

  nascondiForm(): void {
    this.isFormVisible = false;
  }
}
