import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QueryTableComponent } from './query-table/query-table.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { SortDirective } from './directive/sort.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEditComponent } from './add-edit/add-edit.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { LoginComponent } from './login/login.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryTableComponent,
    FilterMenuComponent,
    SortDirective,
    AddEditComponent,
    PokemonSearchComponent,
    LoginComponent,
    BottomBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    AuthModule.forRoot({
      domain: 'dev-mzpojjalxtx2aqqn.us.auth0.com',
      clientId: 'r7am8vu0TbXg7bNbhqfjUXjDii425AQW'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
