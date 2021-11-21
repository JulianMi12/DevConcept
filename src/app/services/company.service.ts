import { Observable } from 'rxjs';
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

  eliminarCompany(id: string): Promise<any>{
    return this.firestore.collection('companies').doc(id).delete();
  }

  getCompany(id: string): Observable<any> {
    return this.firestore.collection('companies').doc(id).snapshotChanges();
  }
  getCompanies(): Observable<any> {
    return this.firestore.collection('companies').snapshotChanges();
  }

  updateCompany(id: string, data:any): Promise<any>{
    return this.firestore.collection('companies').doc(id).update(data);
  }
}
