import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'app/services/auth.service';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css', './style2.css']
})
export class TrackingComponent implements OnInit {

  audits: Observable<any[]> | any;

  constructor(private _CargaScripts: CargarScriptsService, public firestore: AngularFirestore) {
    _CargaScripts.Carga(["navbar"]);
    this.audits = firestore.collection('audits').valueChanges();
   }

  ngOnInit(): void {
  }

}
