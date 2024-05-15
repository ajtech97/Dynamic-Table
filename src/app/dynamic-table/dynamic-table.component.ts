import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorDialogComponent } from '../calculator-dialog/calculator-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ParentDialogComponent } from '../parent-dialog/parent-dialog.component';


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  columns: any[] = []; // Initialize with JSON structure
  rows: any[] = [];

  // comps: any[] = []

  parentComponents: any[] = [];
  // disableDragDrop: boolean = false
  // if(this.parentComponents.includes(row['Salary Component'])){
  //   this.disableDragDrop = true;
  // }

  constructor(private dialog: MatDialog) { }

  fetchData(): void {
    // this.dataService.fetchData().subscribe(data => {
       this.columns = [
      { 
        "name": "Salary Component", 
        "type": "dropdown", 
        "identifier": "salary_component",
        "options": [
          {
            "name":"A. Salary",
            "identifier": "salary",
            "type": "text",
            // "children": [
            //   { "name": "Basicc", "type": "text" },
            //   { "name": "HRAA", "type": "text" }
            // ]
          },
          {
            "name": "Basic",
            "identifier": "basic",
            "type": "text",
          },
          {
            "name": "HRA",
            "identifier": "hra",
            "type": "text",
          },
          {
            "name": "LTA",
            "identifier": "lta",
            "type": "text",
          },
          {
            "name": "B. Sub Total",
            "identifier": "sub_total",
            "type": "text",
          },
          {
            "name": "Medical Insurance",
            "identifier": "medicalinsurance",
            "type": "text",
          },
          {
            "name": "Gratuity",
            "identifier": "gratuity",
            "type": "text",
          },
          {
            "name": "C. Sub Total",
            "identifier": "sub_total",
            "type": "text",
          },
          {
            "name": "Total Cost to Company",
            "identifier": "total_cost_to_company",
            "type": "text",
          }
        ],
        // "editable": true,
      }, 
      { 
        "name": "Monthly Gross", 
        "identifier": "monthly_gross",
        "type": "text", 
        // "editable": true,
      },
      { 
        "name": "Annual Gross", 
        "identifier": "annual_gross",
        "type": "text", 
        // "editable": true,
      }
    ]
    
    this.rows = [
        // { 
        //   "Salary Component": "Basic",
        //   "Monthly Gross": "5000",
        //   "Annual Gross": "60000",
        //   "order": 1,
        //   // "rowdisabled": true,
        //   "level": 0,
        //   "parent": ""
        // },
        // { 
          // "Salary Component": "HRA",
          // "Monthly Gross": "2000",
          // "Annual Gross": "24000",
          // "order": 2,
          // // "rowdisabled": true,
          // "level": 0,
          // "parent": ""
        // },
      ]

  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
  // }

  ngOnInit(): void {
    this.fetchData()
  }

  replaceSpaceWithUnderscore(str: any) {
    return str.replace(/ /g, '_');
  }

  addColumn(): void {
    const newColumnName = prompt('Enter column name:');
    const identifier = newColumnName ? this.replaceSpaceWithUnderscore(newColumnName.toLowerCase()) : '';
    if (newColumnName) {
      this.columns.push({ name: newColumnName, type: 'text', identifier: identifier });
      console.log("columns", this.columns)
    }
  }

  addRow(): void {
    const newRow : any = [];
    this.columns.forEach((column, index) => {
      if (index === 0) {
        newRow[column.name] = column.options[0].name;
      } 
      else {
        // if (column.type === 'dropdown') {
        //   newRow[column.name] = column.options[0].name;
        // } 
        // else {
          newRow[column.name] = '';
          newRow.level = 0
          newRow.parent = ''
          newRow.canIndent = true
          // newRow.listEditable = true;
        // }
      }
    });
    this.rows.push(newRow);

    this.rows.forEach((row, idx) => {
      row.order = idx + 1;
      if (idx < this.rows.length - 1) {
        // Process each item except the last one
        row.canIndent = false
        // row.listEditable = false
      }
      // row.canIndent[idx] = false
      // if(idx > 1){
      //   row.rowdisabled = false;
      // }
    });

  //   this.columns.forEach((column, idx) => {
  //     // if(column.options){
  //       // column.options.forEach((ele: any, index: any) => {
  //         if (idx < columns.length - 1) {
  //           // Process each item except the last one
  //           column.listEditable = true
  //         // }
  //       // })
  //     }
  //   })
  }

  onSave(): void {
    console.log("rows", this.rows)
    // this.dataService.saveTableData(this.rows)
    //   .subscribe(
    //     response => {
    //       console.log('Table data saved successfully:', response);
    //     },
    //     error => {
    //       console.error('Error saving table data:', error);
    //     }
    //   );
  }

  onChangeRowType(row: any, column: any): void {
    // const firstColumnType = this.columns[0].options.find((option: any) => option.name === row[this.columns[0].name]).type;
    const rowIndex = this.rows.indexOf(row);
    console.log(rowIndex)
    console.log(row)
    console.log(column)
    // for (let column of this.columns.slice(1)) {
    //     this.rows[rowIndex][column.name] = ''; // Clear existing data in the row
    // }
    // for (let column of this.columns.slice(1)) {
    //     column.type = firstColumnType === 'text' ? 'text' : 'derived';
    // }

    // console.log("Salary Component", row["Salary Component"])

    // this.comps.push(row["Salary Component"])


     
}

  onCellClick(row: any, columnName: string): void {
    console.log("row", row)
    console.log("columnName", columnName)
    console.log('Cell clicked:', row[columnName]);
  }

  onTextFieldDoubleClick(row: any, columnName: string): void {
    console.log("rowe", row)
    console.log("columnNamee", columnName)

    const dialogRef = this.dialog.open(CalculatorDialogComponent, {
      width: '95%',
      height:'95%',
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {
        row: row,
        column: columnName
      },
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed:', result);
    });
  }

  deleteRow(roww: any,rowIndex: number): void {

    this.parentComponents = this.rows.map(row => row.parent);
    // let levelZero : any[] = []
    // this.rows.forEach(row => {
    //   if(row.level === 0) {
    //     levelZero.push(row['Salary Component'])
    //   }
    // });
    console.log("parentComponents ", this.parentComponents )
    // console.log("levelZero ", levelZero )
    // for (let row of this.rows) {
      // !roww.hasOwnProperty('parent') ||
      if (this.parentComponents.includes(roww['Salary Component'])) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: '250px',
          // After deleting you will require to indent all the data again..
          data: { 
            message: 'Cannot be deleted, please delete dependent childs',
            // actionName: 'Ok'
            action: false
          }
        });
        return
      }
    // }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      // After deleting you will require to indent all the data again..
      data: { 
        message: 'Are you sure you want to delete this row?', 
        action: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.rows.splice(rowIndex, 1);

        this.rows.forEach((roww, idx) => {
          roww.order = idx + 1;

          // if(roww.parent === row['Salary Component']){
          //   console.log("rowParent", roww.parent)
          //   this.rows.splice(idx,1)
          // }
          // this.rows.splice(row)
          // row.level = 0
          // roww.canIndent = true;
        });
      }
    });
  }

  deleteColumn(columnIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this column?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.columns.splice(columnIndex, 1);
      }
    });
  }

  // openParentDialog(row: any, columnName: any){
  //   console.log("rowe", row)
  //   console.log("columnNamee", columnName)

  //   const dialogRef = this.dialog.open(ParentDialogComponent, {
  //     width: '95%',
  //     height:'95%',
  //     maxWidth: '95vw',
  //     maxHeight: '95vh',
  //     data: {
  //       row: row,
  //       column: columnName,
  //       comps: this.comps
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //       console.log('Dialog closed:', result);
  //   });
  // }

  onDrop(event: CdkDragDrop<string[]>) {

    this.parentComponents = this.rows.map(row => row.parent);

    console.log("parentComponentss", this.parentComponents)

    const draggedElement = this.rows[event.previousIndex];
    console.log("dragelement", draggedElement)
    console.log("dragElement", draggedElement['Salary Component'])

    if (this.parentComponents.includes(draggedElement['Salary Component'])) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '250px',
        // After deleting you will require to indent all the data again..
        data: { 
          message: 'Cannot be dragged as it has children components',
          // actionName: 'Ok'
          action: false
        }
      });
      return
    }

    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
    
    // const draggedElement = this.rows[event.currentIndex];
    // console.log("dragelement", draggedElement)
    // const children = this.getChildren(draggedElement['Salary Component']);
    // const itemsToMove = [draggedElement, ...children];

    // this.moveItemsInArray(this.rows, event.previousIndex, event.currentIndex, itemsToMove.length);
    
    this.rows.forEach((row, idx) => {
      row.order = idx + 1;
       if(idx == 0){
        row.level = 0;
      }
    });

        
    const currentComp = this.rows[event.currentIndex];
    const prevCompo = this.rows[event.currentIndex - 1];
    const nextCompo = this.rows[event.currentIndex + 1];
    
    console.log("currentComp", currentComp)
    console.log("prevComp", prevCompo)
    console.log("nextCompo", nextCompo)
    
    if(prevCompo === undefined && nextCompo === undefined){
      currentComp.parent = ""
      currentComp.level = 0
      console.log("rows", this.rows)
      return
    }

    if(prevCompo === undefined){
      currentComp.parent = nextCompo.parent
      currentComp.level = nextCompo.level
      console.log("rows", this.rows)
      return
    }

    if(nextCompo === undefined){
      currentComp.parent = prevCompo.parent
      currentComp.level = prevCompo.level
      console.log("rows", this.rows)
      return
    }

    if(nextCompo?.parent === ""){
      currentComp.parent = prevCompo.parent
      currentComp.level = prevCompo.level
      console.log("rows", this.rows)
      return
    }

    console.log("rows", this.rows)
    
    if(prevCompo?.parent === nextCompo?.parent){
      currentComp.parent = prevCompo.parent
      currentComp.level = prevCompo.level
      return
      // this.indent(currentIndexData, event.currentIndex)
    }

    console.log("rows", this.rows)
    
    if(prevCompo?.parent === "" || prevCompo?.parent !== nextCompo?.parent){
      currentComp.parent = nextCompo.parent
      currentComp.level = nextCompo.level
      return
    }

    console.log("rows", this.rows)


    

    // if(nextCompo.parent !== prevCompo.parent){
    //   currentComp.parent = nextCompo.parent
    //   currentComp.level = nextCompo.level
    // }


    console.log("rows", this.rows)

    
  }

  // getChildren(parentComponent: string) {
  //   return this.rows.filter(row => row.parent === parentComponent);
  // }

  // moveItemsInArray(array: any[], fromIndex: number, toIndex: number, length: number) {
  //   const items = array.splice(fromIndex, length);
  //   if (fromIndex < toIndex) {
  //     toIndex -= length;
  //   }
  //   array.splice(toIndex, 0, ...items);
  // }

  indent(row: any, rowIndex: any){
    console.log("row", row)
    console.log("rowIndex", rowIndex)

    let previousRoww = this.rows[rowIndex-1]
    if(row.level < previousRoww.level + 1){
    // 0 <= 0+1 = 1
    // 1 <= 0+1 = 1  
    row.level = row.level + 1

    let rowLevelParentArray: any[] = [] 
    this.rows.forEach((row, idx) => {
      if(row.level === 0){
        rowLevelParentArray.push(row["Salary Component"])
      }
    })

    console.log("rowlevelarray", rowLevelParentArray)
    row.parent = rowLevelParentArray.pop()
    // console.log("rows", this.rows)
    // console.log('row', this.rows[rowIndex-1])
    
    let previousRow = this.rows[rowIndex-1]
    // console.log("previous row", previousRow.level)
    if(row.level === previousRow.level){
      row.parent = previousRow.parent
    }

    // console.log("rows", this.rows)
    if(row.level > previousRow.level){
      row.parent = previousRow['Salary Component']
    }

    let rowLevelLessThanParentArray : any[] = []
    if(row.level < previousRow.level){
      this.rows.forEach((roww, idx) => {
        if(row.level === roww.level){
          rowLevelLessThanParentArray.push(row.parent)
        }
      })

      console.log("rowLevelLessThanParentArray", rowLevelLessThanParentArray)
      row.parent = rowLevelLessThanParentArray.pop()
    }
    
      console.log("rows", this.rows)
    }
  }

}
