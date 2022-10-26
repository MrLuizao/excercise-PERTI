import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarPipe } from './searchbar.pipe';


@NgModule({
  declarations: [
    SearchbarPipe
  ],
  exports: [
    SearchbarPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
