import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { LeadsComponent } from './modules/leads/leads.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ContactsComponent,
    LeadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
