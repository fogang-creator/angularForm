import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-yes-no-component',
  templateUrl: './yes-no-component.component.html',
  styleUrls: ['./yes-no-component.component.scss']
})
export class YesNoComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<YesNoComponentComponent>,
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
