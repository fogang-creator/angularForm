import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, ProduitElement } from 'src/app/models/produits.model';
import { MatDialog } from '@angular/material/dialog';
import { PopupProduitComponent } from 'src/app/shared/popup-produit/popup-produit.component';


@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.scss']
})
export class PageProduitComponent implements OnInit {

  produits: ProduitElement[] = ELEMENT_DATA ;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  datas = this.produits;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  newProduit() {
   const dataRef = this.dialog.open(PopupProduitComponent, {
     data: {
      title: "Ajout d'un nouveau produit",
       content:" You should provide an accessible label to this root dialog element by setting the ariaLabel or ariaLabelledBy properties of MatDialogConfig. You can additionally specify a description element ID via the ariaDescribedBy property of MatDialogConfig.",
       yes:" Ajouter",
       no:" Annuler"
     }
   });
   

  }

}
