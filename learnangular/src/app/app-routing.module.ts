import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderComponent } from './component/headers/header/page-header/page-header.component';
import { PageProduitComponent } from './component/produits/page-produit/page-produit.component';
import { UsersComponent } from './component/headers/users/users.component';
import { FicheTitreComponent } from './component/reservation/fiche-titre/fiche-titre.component';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';

const routes: Routes = [
  {path: "login" , component: UsersComponent},
  //  { path: "produits/:id", component: PageProduitComponent},
  { path: "produits", component: PageProduitComponent},
  { path: "", redirectTo: "reservation", pathMatch: "full"},
  {path: "reservation" , component:PageHeaderComponent},
  {path: "fiche", component: FicheTitreComponent},
  {path:"employee", component: EmployeeListComponent}
  // {path: '**', redirectTo : 'login' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
