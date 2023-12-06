import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})


export class ReactiveformComponent{

  constructor(private fb: FormBuilder) { }
  moduloReattivo: any;


  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: ['', Validators.required],
  })
  
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  
}

