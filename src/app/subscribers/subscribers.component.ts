import { Component,OnInit } from '@angular/core';
import { SubscribersService } from '../services/subscribers.service';
interface Subscriber {
  id: string;
  data: {
    name: string;
    email: string;
  }
}

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit{

  subscribersArray: Subscriber[] = [];

  constructor( private subService: SubscribersService){}

  ngOnInit(): void {
    this.subService.loadData().subscribe(val => {
      this.subscribersArray=val;
    })
  }
  onDelete(id: any){
    this.subService.deleteData(id);
  }

}
