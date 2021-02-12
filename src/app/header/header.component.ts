import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private route:ActivatedRoute){
   }
   ngOnInit() {
    this.route.fragment.subscribe(fragment => {console.log(fragment)});
  }
  Active (el:any){
    console.log (el)
    document.querySelectorAll("a").forEach(a=>a.style.textDecoration="none")
    const truc=document.getElementById(el)
    if(truc){
      truc.style.textDecoration= 'underline'
    }
  }
}
