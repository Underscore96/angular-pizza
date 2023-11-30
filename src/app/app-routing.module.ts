import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { BibiteComponent } from './bibite/bibite.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'bibite', component: BibiteComponent },
  { path: '**', redirectTo: '/menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
