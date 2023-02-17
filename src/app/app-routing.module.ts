import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AuthComponent } from './authorization/auth.component';
import { CreditsComponent } from './credits/credits.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { StyleResolver } from './shared/resolvers/style-resolver';

const routes: Routes = [
  { 
    path: 'login', 
    component: AuthComponent,
    resolve: { style: StyleResolver },
    runGuardsAndResolvers: 'always'
  },
  { 
    path: 'add-edit', 
    component: AddEditComponent,
    resolve: { style: StyleResolver },
    runGuardsAndResolvers: 'always' },
  { 
    path: 'pokemon-search', 
    component: PokemonSearchComponent,
    resolve: { style: StyleResolver },
    runGuardsAndResolvers: 'always'
  },
  { 
    path: 'credits', 
    component: CreditsComponent,
    resolve: { style: StyleResolver },
    runGuardsAndResolvers: 'always'
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
