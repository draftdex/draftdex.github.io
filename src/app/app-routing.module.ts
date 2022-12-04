import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AuthComponent } from './authorization/auth.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'add-edit', component: AddEditComponent },
  { path: 'pokemon-search', component: PokemonSearchComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
