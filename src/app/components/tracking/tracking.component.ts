import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css', './style2.css']
})
export class TrackingComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService, public authService: AuthService) {
    _CargaScripts.Carga(["navbar"]);
   }

  ngOnInit(): void {
  }

}
