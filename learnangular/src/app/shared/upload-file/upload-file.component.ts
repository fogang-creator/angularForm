import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  fileToUpload: File | null = null;
  file: any;

  essaye:string="0310000";
  test!:string;
  constructor() { }

  ngOnInit(): void {
  //this.essaye.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  //this.test= this.essaye.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  this.test = this.essaye.replace(/(?=.{3}$)/,' ').replace(/\B(?=(\d{2})+(?!\d))/, ' ')
  //this.test = this.essaye.replace(/(?=.{3}$)/,' ').replace(/\B(?=(\d{5})+(?!\d))/, ' ').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  //replace(/.{3}$/,' $&') ou replace(/(?=.{3}$)/,' ')
  //this.test=this.essaye.replace(/([a-z])([0-9])|([0-9])([a-z])/gi, '$1 $2$3 $4')
  }
  handleFileInput(event: any) {
    this.file= event.target.files(0);
    console.log(" fichier : ", this.file);
}

}
