import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  hours = this.pad(9, 2);
  minutes = this.pad(53, 2);
  seconds = this.pad(49, 2);

  constructor() { }

  ngOnInit() {
  }

 pad(num, size){     
   return ('000000000' + num).substr(-size); 
  }

}
