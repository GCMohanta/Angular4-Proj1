import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TrailComponent }  from './trail.component';
import { IntroComponent }  from './intro/intro.component';
import { DirectivesComponent }  from './directives/directives.component';
import { FormsComponent }  from './forms/forms.component';
import { appConfirm }  from './custom/appConfirm.directive';

const appRoutess:Routes = [
  {path:'trail', component:TrailComponent},
  {path:'intro', component:IntroComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'forms', component:FormsComponent}
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutess),FormsModule ],
  declarations: [ 
  					AppComponent,
  					TrailComponent,
  					IntroComponent,
  					DirectivesComponent,
  					FormsComponent,
  					appConfirm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
