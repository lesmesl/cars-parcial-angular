import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListVehiclesComponent } from './list-vehicles.component';
import { VehicleService } from '../vehicles.service';
import { Vehicle } from '../vehicles';

describe('ListVehiclesComponent', () => {
  let component: ListVehiclesComponent;
  let fixture: ComponentFixture<ListVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehiclesComponent ],
      providers: [ VehicleService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the tabladata table correctly', () => {
    // Crear una lista de 3 vehículos
    const vehicles: Vehicle[] = [
      { id: 1, marca: 'Renault', linea: 'Kangoo', modelo: 2017 },
      { id: 2, marca: 'Chevrolet', linea: 'Spark', modelo: 2018 },
      { id: 3, marca: 'Chevrolet', linea: 'Sail', modelo: 2016 }
    ];

    // Establecer la lista de vehículos en el componente
    component.vehicles = vehicles;

    // Detectar los cambios
    fixture.detectChanges();

    // Obtener la tabla `tabladata`
    const table: HTMLTableElement = fixture.nativeElement.querySelector('#tabladata');

    // Verificar que la tabla tenga 4 filas (1 fila para el encabezado y 3 filas para los datos)
    const rowCount = table.rows.length;
    expect(rowCount).toBe(4);
  });
});
