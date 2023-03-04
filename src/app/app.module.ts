import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QueryTableComponent } from './query-table/query-table.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { SortDirective } from './shared/directives/sort.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { AuthComponent } from './authorization/auth.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { CreditsComponent } from './credits/credits.component';
import { RulesetComponent } from './ruleset/ruleset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryTableComponent,
    FilterMenuComponent,
    SortDirective,
    AddEditComponent,
    PokemonSearchComponent,
    CreditsComponent,
    RulesetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BottomBannerComponent,
    AuthComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
