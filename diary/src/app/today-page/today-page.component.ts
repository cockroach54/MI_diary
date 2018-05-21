import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-today-page',
  templateUrl: './today-page.component.html',
  styleUrls: ['./today-page.component.css']
})
export class TodayPageComponent implements OnInit {
  public feeling: string = 'default_feeling';

  constructor(
    private router: Router,    
  ) { }

  ngOnInit() {
    document.getElementById('feeling').addEventListener('keyup', e => {
      if(e.keyCode==13) this.goNext(); // 13 == enter
    });
  }

  goNext(){
    this.feeling = (<HTMLInputElement>document.getElementById('feeling')).value;
    console.log("feeling:", this.feeling, "디비저장하기");
    this.router.navigate(['pages/happen']);        
  }
}
