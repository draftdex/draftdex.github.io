import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CreditsComponent } from './credits/credits.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

const routes: Routes = [
  { path: 'add-edit', component: AddEditComponent },
  { path: 'pokemon-search', component: PokemonSearchComponent },
  { path: 'credits', component: CreditsComponent},
  { path: '**', redirectTo: 'pokemon-search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
