import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }
