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
  brands: { [marca: string]: number } = {};
  brandsList: {nombre:string, cantidad:number}[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehiclesList().subscribe((vehicles) => {
      this.vehicles = vehicles

      this.vehicles.forEach(coche => {
        const marca = coche.marca;
        this.brands[marca] = (this.brands[marca] || 0) + 1;
      });

      for (const marca in this.brands) {
        if (this.brands.hasOwnProperty(marca)) {
            const cantidad = this.brands[marca];
            this.brandsList.push({nombre: marca, cantidad})
        }
      }
     
    })
  }
}
