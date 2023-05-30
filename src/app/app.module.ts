import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddNewComponent } from './add-new/add-new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { ViewManhwaComponent } from './view-manhwa/view-manhwa.component';
import {    HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddNewComponent,
    PageNotFoundComponent,
    UpdateDetailsComponent,
    ViewManhwaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
