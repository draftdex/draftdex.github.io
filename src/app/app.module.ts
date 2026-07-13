import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authorization/auth.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { CreditsComponent } from './credits/credits.component';
import { SortDirective } from './directive/sort.directive';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { HeaderComponent } from './header/header.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { QueryTableComponent } from './query-table/query-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterMenuComponent,
    PokemonSearchComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BottomBannerComponent,
    AuthComponent,
    HeaderComponent,
    QueryTableComponent,
    SortDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
