import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css', './style2.css']
})
export class ServiceComponent implements OnInit {

  services: Observable<any[]> | any;

  constructor(private _CargaScripts: CargarScriptsService, public firestore: AngularFirestore) {
    _CargaScripts.Carga(["navbar"]);
    this.services = firestore.collection('services').valueChanges();
   }

  ngOnInit(): void {
  }

}
