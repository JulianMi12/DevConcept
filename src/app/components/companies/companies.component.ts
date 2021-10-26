import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css', './style2.css']
})
export class CompaniesComponent implements OnInit {

  companies: Observable<any[]> | any;

  constructor(private _CargaScripts: CargarScriptsService, public firestore: AngularFirestore) {
    _CargaScripts.Carga(["navbar"]);
    this.companies = firestore.collection('companies').valueChanges();
   }

  ngOnInit(): void {
  }

}
