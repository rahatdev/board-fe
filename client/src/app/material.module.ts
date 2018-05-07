import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatDividerModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatButtonToggleModule } from '@angular/material'

@NgModule({
  imports: [ ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class MaterialModule { 
  // static forRoot() {
  //   return {
  //     ngModule: MaterialModule
  //   };
  // }
}
