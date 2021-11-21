import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CargarScriptsService } from 'app/services/cargar-scripts.service';
import { CompanyService } from 'app/services/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css', './style2.css']
})
export class CompaniesComponent implements OnInit {

  companies: Observable<any[]> | any;

  constructor(private _CargaScripts: CargarScriptsService, public firestore: AngularFirestore, public companyService: CompanyService) {
    _CargaScripts.Carga(["navbar"]);
    this.companies = firestore.collection('companies').valueChanges();
   }

  ngOnInit(): void {
    this.getCompanies();
  }

  eliminarCompany(id: string) {
    this.companyService.eliminarCompany(id).then(() => {
      console.log('The company was successfully eliminated' +id);
    }).catch(error => {
      console.log(error);
    });
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(
      data => {
        this.companies = [];
        data.forEach((element: any) => {
          this.companies.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.companies);
      }
    );
  }
}
