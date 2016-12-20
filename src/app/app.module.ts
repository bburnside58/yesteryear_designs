import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
    FormsModule,
    ReactiveFormsModule
 } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AttentionComponent } from './attention/attention.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AttentionComponent,
    ContentComponent,
    AboutComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
