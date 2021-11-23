import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private firestore: AngularFirestore) { }

  agregarService(service: any): Promise<any>{
    return this.firestore.collection('services').add(service);
  }
  eliminarService(id: string): Promise<any>{
    return this.firestore.collection('services').doc(id).delete();
  }

  getService(id: string): Observable<any> {
    return this.firestore.collection('services').doc(id).snapshotChanges();
  }
  getService(): Observable<any> {
    return this.firestore.collection('services').snapshotChanges();
  }

  updateService(id: string, data:any): Promise<any>{
    return this.firestore.collection('services').doc(id).update(data);
  }
}
