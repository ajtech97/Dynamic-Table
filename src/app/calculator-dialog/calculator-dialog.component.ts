import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator-dialog',
  templateUrl: './calculator-dialog.component.html',
  styleUrls: ['./calculator-dialog.component.scss']
})
export class CalculatorDialogComponent {

  stringToEvaluate: string=""

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log("data row", data.row)
    console.log("data column", data.column)
    console.log("value",data.row[data.column])
  }
  
  closeDialog(){
    this.dialogRef.close();
  }

  takeInput(num: string){
    this.stringToEvaluate = this.stringToEvaluate + num
    console.log("string", this.stringToEvaluate)
  }
  
}
