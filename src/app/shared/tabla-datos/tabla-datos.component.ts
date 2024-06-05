import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-datos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css'
})
export class TablaDatosComponent {
  titulo1:string="Columna 1"
  titulo2:string="Columna 2"
  titulo3:string="Columna 3"
  
  filas:any[] = [
    {"texto":"Fila1"},
    {"texto":"Fila2"},
    {"texto":"Fila3"},
    {"texto":"Fila4"},
  ]
}

