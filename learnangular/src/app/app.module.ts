//npm install --save @angular/material 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 import { MatTableModule } from '@angular/material/table';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {  MatProgressBarModule } from '@angular/material/progress-bar';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/headers/users/users.component';
import { HeaderComponent } from './component/headers/header/header.component';

import { PageProduitComponent } from './component/produits/page-produit/page-produit.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { PopupProduitComponent } from './shared/popup-produit/popup-produit.component';
import { YesNoComponentComponent } from './shared/yes-no-component/yes-no-component.component';
import { PageHeaderComponent } from './component/headers/header/page-header/page-header.component';
import { PageReservationComponent } from './component/reservation/page-reservation/page-reservation.component';
import { FicheTitreComponent } from './component/reservation/fiche-titre/fiche-titre.component';
import {InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { ApiProduits } from './shared/api/api-produit';
import { UploadFileComponent } from './shared/upload-file/upload-file.component';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';





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
    PageReservationComponent,
    FicheTitreComponent,
    UploadFileComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    InMemoryWebApiModule.forFeature(ApiProduits)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
