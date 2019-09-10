import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushComponent } from './push/push.component';
import { VotetocheckComponent } from './votetocheck/votetocheck.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { from } from 'rxjs';
import { DelarrComponent } from './delarr/delarr.component';
import { UiComponent } from './ui/ui.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoupanComponent } from './coupan/coupan.component';
import { HoverComponent } from './hover/hover.component';
import { IdcardComponent } from './idcard/idcard.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { CheckComponent } from './check/check.component';
import { HelloComponent } from './hello/hello.component';
import { TolistComponent } from './tolist/tolist.component';
import { RestabComponent } from './restab/restab.component';
import { StrdirecComponent } from './strdirec/strdirec.component';
import { FormsComponent } from './forms/forms.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { MoviesComponent } from './movies/movies.component';
import { FavalbumsComponent } from './favalbums/favalbums.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  {path:'bank',component:BankComponent},

  {path: '', component: Page1Component},
  {path:'page2',component:Page2Component},
 
  {path:'movies',component:MoviesComponent},
  {path:'favalbums',component:FavalbumsComponent},
  {path: 'forms', component: FormsComponent},
  { path: 'strdir', component: StrdirecComponent },
  { path: 'restab', component: RestabComponent },
  { path: 'tolist', component: TolistComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'registration', component: RegistrationformComponent },
  { path: 'nav', component: NavComponent },
  { path: 'idcard', component: IdcardComponent },
  { path: 'hover', component: HoverComponent },
  { path: 'coupan', component: CoupanComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'cal', component: CalculatorComponent },
  { path: 'check', component: CheckComponent },
  { path: 'ui', component: UiComponent }
  // {path:"",component:DelarrComponent}
  // {path:"",component:ThumbnailComponent}
  // {path:"",component:VotetocheckComponent}
  // {path:"",component:PushComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
