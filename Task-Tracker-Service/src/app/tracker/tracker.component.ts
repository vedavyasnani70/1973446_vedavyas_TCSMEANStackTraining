import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  constructor(public tasSer:TrackerService) { }

  ngOnInit(): void {
  }
  storeUser(tasRef:any){
    console.log(tasRef);
    this.tasSer.storeTask(tasRef);
  }

}
