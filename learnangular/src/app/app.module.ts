//npm install --save @angular/material 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 import { MatTableModule } from '@angular/material/table';
 import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {  MatProgressBarModule } from '@angular/material/progress-bar';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { HeaderComponent } from './component/header/header.component';

import { PageProduitComponent } from './component/produits/page-produit/page-produit.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { PopupProduitComponent } from './shared/popup-produit/popup-produit.component';
import { YesNoComponentComponent } from './shared/yes-no-component/yes-no-component.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { PageReservationComponent } from './component/page-reservation/page-reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    PageProduitComponent,
    ProgressBarComponent,
    PopupProduitComponent,
    YesNoComponentComponent,
    PageHeaderComponent,
    PageReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatProgressBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
