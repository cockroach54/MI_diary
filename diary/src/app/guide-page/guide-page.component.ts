import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.css']
})
export class GuidePageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  
  ngOnInit() {
    
  }
  
  goNext(){
    this.router.navigate(['pages/name']);    
  }

}
