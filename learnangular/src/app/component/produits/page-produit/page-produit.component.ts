import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupProduitComponent } from 'src/app/shared/popup-produit/popup-produit.component';
import { ProduitsServce } from 'src/app/services/produits.service';
import { ProduitElement } from 'src/app/models/produits.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.scss']
})
export class PageProduitComponent implements OnInit {

  produits!: ProduitElement[]  ;

  nproduit!: ProduitElement  ;
  errorMess: string = ' ';
  @Output() goToSearch = new EventEmitter<any>();
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  datas = this.produits;
  constructor(private dialog: MatDialog, private produitsService: ProduitsServce, private router:Router) { }

  ngOnInit() {
this.produitsService.getProduits().subscribe({
  next: produit =>{this.datas = produit;},
  error: err=>{ this.errorMess= err;}
});
console.log(this.produitsService);
  }
  
  newProduit() {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose= true;
    dialogConfig.autoFocus= true;
  
   const dataRef = this.dialog.open(PopupProduitComponent, dialogConfig);

  //  dataRef.afterClosed().subscribe((dialogResult)=>{
  //    if(dialogResult){
  //     console.log(dialogResult);
  //      this.produitsService.createProduits(dialogResult).subscribe({
  //       next: ()=> console.log(dialogResult)

  //      })
  //    }
  //  })

  }

  update(produitId:string ) {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose= true;
    dialogConfig.autoFocus= true;
    dialogConfig.id = produitId;
  
   const dataRef = this.dialog.open(PopupProduitComponent, dialogConfig);
  //  dataRef.afterClosed().subscribe( (result)=>{
  //    if(result){
  //      console.log(result);
  //      result.id= produitId;
  //    }
   
  //  })
  }

  
}
