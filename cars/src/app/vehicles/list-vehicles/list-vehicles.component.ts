import { Component } from '@angular/core';
import { VehicleService } from '../vehicles.service'
import { Vehicle } from '../vehicles'

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehiclesList().subscribe((vehicles) => {
      this.vehicles = vehicles
    })
  }
}
