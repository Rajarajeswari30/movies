import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushComponent } from './push/push.component';
import { VotetocheckComponent } from './votetocheck/votetocheck.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { DelarrComponent } from './delarr/delarr.component';
import {UiComponent} from './ui/ui.component';

import { CalculatorComponent } from './calculator/calculator.component';

import { CarouselComponent } from './carousel/carousel.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CoupanComponent} from './coupan/coupan.component';
import {HoverComponent} from './hover/hover.component';
import { IdcardComponent } from './idcard/idcard.component';
import { NavComponent } from './nav/nav.component';
import {RegistrationformComponent} from './registrationform/registrationform.component';
import {CheckComponent} from './check/check.component';
import {HelloComponent} from './hello/hello.component';
import { SearchPipe } from './search.pipe';
import {TolistComponent} from './tolist/tolist.component';
import { RestabComponent } from './restab/restab.component';
import { StrdirecComponent } from './strdirec/strdirec.component';
import { FormsComponent } from './forms/forms.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { FavalbumsComponent } from './favalbums/favalbums.component';
import { BankComponent } from './bank/bank.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    PushComponent,
    VotetocheckComponent,
    ThumbnailComponent,
    DelarrComponent,
    UiComponent,
    CalculatorComponent,
    HelloComponent,
    CarouselComponent,
    CoupanComponent,
    HoverComponent,
    IdcardComponent,
    NavComponent,
    RegistrationformComponent,
    CheckComponent,
    SearchPipe,
    TolistComponent,
    RestabComponent,
    StrdirecComponent,
    FormsComponent,
    Page1Component,
    Page2Component,
   
    MoviesComponent,
    FavalbumsComponent,
    BankComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
