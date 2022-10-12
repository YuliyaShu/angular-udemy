import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviderComponent } from './devider/devider.component';



@NgModule({
  declarations: [
    DeviderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DeviderComponent],
})
export class SharedModule { }
