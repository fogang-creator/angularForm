import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitElement } from 'src/app/models/produits.model';
import { ProduitsServce } from 'src/app/services/produits.service';

@Component({
  selector: 'app-popup-produit',
  templateUrl: './popup-produit.component.html',
  styleUrls: ['./popup-produit.component.scss']
})
export class PopupProduitComponent implements OnInit {

  produitForn!: FormGroup;
   produits!:ProduitElement;
   titre:string = "";

  constructor(public dialogRef: MatDialogRef<PopupProduitComponent>,
    private fb: FormBuilder, private router:Router, private produitsService: ProduitsServce,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produitForn = this.fb.group({
     Position: ['', Validators.required],
     Name: ['', Validators.required],
     Weight:['', Validators.required],
     Symbole: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const id = +!params.get('id');
       this.getSelectedProduit(id);
      console.log(id);
      console.log(this.getSelectedProduit(id));
    })

   
  }

  
  public displayProduit(produit: ProduitElement ): void {
    this.produits = produit;

    if (this.produits.id === 0) {
      this.titre = 'Ajouter un produit';
    } else {
      this.titre = `Modifier le produit ${this.produits.name}`;
    }
    this.produitForn.patchValue({
      Position: this.produits.id,
     Name: this.produits.name,
     Weight:this.produits.weight,
     Symbole: this.produits.symbol
    });
  }

  public getSelectedProduit(id: number): void {
    this.produitsService.getProduitById(id).subscribe({
      next: (produit: ProduitElement) => this.displayProduit(produit),
    });
  }

  onSubmit():void {
    if(this.produitForn.valid){

      //dirty =s'il y'a au moins un element
       if(this.produitForn.dirty){
      const produit:ProduitElement={
      ...this.produitForn, 
      ...this.produitForn.value
      };

      console.log(this.produitForn.value);
      if(produit.id ==0){
        this.produitsService.createProduits(produit).subscribe({
                next: ()=> {
                  // this.produitForn.reset();
                   this.saveComplete();
                  console.log( this.saveComplete());
                  //this.onClose();

                }
        
               })
        
      }
    
      // this.produitsService.createProduits(this.produitForn.value).subscribe({
      //   next:(res)=>{
      //      alert("produit ajouter avec succés");
      //     this.produitForn.reset();
      //    this.dialogRef.close();
      //   },
      //   error:()=>{
      //     alert("une erreur est survenue");
      //   }
      // })
      }
    }
    }

    onClose() {
      this.dialogRef.close();
    }
 
    public saveComplete(): void{
      this.produitForn.reset();
      this.router.navigate(['/produits']);
    }

    public get tags(): FormArray {
      return this.produitForn.get('tags') as FormArray;
    }
  
    public addTag(): void {
      this.tags.push(new FormControl());
    }
  
    public deleteTag(index: number): void {
      this.tags.removeAt(index);
      this.tags.markAsDirty();
    }

    public deleteHotel(): void {

      if (this.produits.id === 0) {
        this.saveComplete();
      } else {
        if (confirm(`Voulez-vous réelement supprimer ${this.produits.name} ?`)) {
          // this.produitsService.deleted(this.produits.id).subscribe({
          //   next: () => this.saveComplete(),
          // });
        }
      }
  
    }
   
  }



