import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
interface Subscriber {
  id: string;
  data: {
    name: string;
    email: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  loadData() {
    return this.afs.collection('subscribers').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data } as Subscriber;
        });
      })
    );
  }
  deleteData(id: any){
    this.afs.collection('subscribers').doc(id).delete().then((docRef) =>{
      this.toastr.success('Data Deleted ..!');
    })
  }
}
