import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css', './style2.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
