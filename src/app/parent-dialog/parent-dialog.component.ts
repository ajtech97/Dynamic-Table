import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-parent-dialog',
  templateUrl: './parent-dialog.component.html',
  styleUrls: ['./parent-dialog.component.scss']
})
export class ParentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log("data row", data.row)
    console.log("data column", data.column)
    console.log("aa",data.row[data.column])
    console.log("comps: this.comps", data.comps)
  }
  
  closeDialog(){
    this.dialogRef.close();
  }
}
