import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService, public authService: AuthService) {
    _CargaScripts.Carga(["navbar"]);
   }
  ngOnInit(): void {
  }

}
