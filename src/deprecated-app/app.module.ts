import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QueryTableComponent } from './query-table/query-table.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { AuthComponent } from './authorization/auth.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { CreditsComponent } from './credits/credits.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryTableComponent,
    FilterMenuComponent,
    AddEditComponent,
    PokemonSearchComponent,
    CreditsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BottomBannerComponent,
    AuthComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
