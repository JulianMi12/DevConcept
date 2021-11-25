import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private firestore: AngularFirestore) { }

  agregarAudit(audit: any): Promise<any>{
    return this.firestore.collection('Audit').add(audit);
  }

  eliminarAudit(id: string): Promise<any>{
    return this.firestore.collection('Audit').doc(id).delete();
  }

  getAudit(id: string): Observable<any> {
    return this.firestore.collection('Audit').doc(id).snapshotChanges();
  }
  getAudits(): Observable<any> {
    return this.firestore.collection('Audits').snapshotChanges();
  }

  updateAudit(id: string, data:any): Promise<any>{
    return this.firestore.collection('Audit').doc(id).update(data);
  }
}
