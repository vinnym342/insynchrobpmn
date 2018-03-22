import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
