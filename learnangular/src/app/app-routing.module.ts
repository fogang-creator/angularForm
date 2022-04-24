import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { PageProduitComponent } from './component/produits/page-produit/page-produit.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  {path: "login" , component: UsersComponent},
  { path: "produits", component: PageProduitComponent},
  { path: "", redirectTo: "reservation", pathMatch: "full"},
  {path: "reservation" , component:PageHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
