import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import more Material modules as you need

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
    // and other material modules you want globally
  ]
})
export class MaterialModule { }
