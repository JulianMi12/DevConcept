import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private firestore: AngularFirestore) { }

  agregarCompany(company: any): Promise<any>{
    return this.firestore.collection('companies').add(company);
  }
}
