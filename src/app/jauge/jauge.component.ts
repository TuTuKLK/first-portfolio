import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jauge',
  templateUrl: './jauge.component.html',
  styleUrls: ['./jauge.component.scss']
})
export class JaugeComponent implements OnInit {
  @Input() valj="";
   @Input() title="";

  constructor() { }

  ngOnInit(): void {
  }

}
