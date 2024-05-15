import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorDialogComponent } from './calculator-dialog/calculator-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ParentDialogComponent } from './parent-dialog/parent-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    CalculatorDialogComponent,
    ConfirmationDialogComponent,
    ParentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Add FormsModule to imports
    MatDialogModule,
    DragDropModule
  ],
  // exports: [
  //   CalculatorDialogComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
