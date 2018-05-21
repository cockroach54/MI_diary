import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-happen-page',
  templateUrl: './happen-page.component.html',
  styleUrls: ['./happen-page.component.css']
})
export class HappenPageComponent implements OnInit {
  public happening: string = 'happen_default';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goNext(){
    this.happening = (<HTMLInputElement>document.getElementById('happening')).value;
    console.log("happening:", this.happening, "디비저장하기");
    this.router.navigate(['pages/mean']);        
  }

}
