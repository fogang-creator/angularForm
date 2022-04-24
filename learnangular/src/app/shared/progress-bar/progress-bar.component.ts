import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {

  @Input() loadingValue!: number;
  @Input() mode!: string;
  @Input() progressVal!: number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['loadingValue']){
      this.progressVal = changes['loadingValue'].currentValue;
      this.mode = this.progressVal && this.progressVal < 100 ? 'determinate' : 'indeterminate';
    }
  }

 
}
