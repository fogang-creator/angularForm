import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-produit',
  templateUrl: './popup-produit.component.html',
  styleUrls: ['./popup-produit.component.scss']
})
export class PopupProduitComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
   
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
  onConfirm():void{
    this.dialogRef.close(true);
  }


}
