import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';



@NgModule({
  declarations: [
    ListVehiclesComponent
  ],
  exports: [ListVehiclesComponent],
  imports: [
    CommonModule
  ]
})
export class VehiclesModule { }
