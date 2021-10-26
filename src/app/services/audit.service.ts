import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private firestore: AngularFirestore) { }

  agregarAudit(audit: any): Promise<any>{
    return this.firestore.collection('audits').add(audit);
  }
}
