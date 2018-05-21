import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-page',
  templateUrl: './change-page.component.html',
  styleUrls: ['./change-page.component.css']
})
export class ChangePageComponent implements OnInit {
  public change: string = 'default_change';

  constructor(
    private router: Router,    
  ) { }

  ngOnInit() {
    document.getElementById('change').addEventListener('keyup', e => {
      if(e.keyCode==13) this.goNext(); // 13 == enter
    });
  }

  goNext(){
    this.change = (<HTMLInputElement>document.getElementById('change')).value;
    console.log("change:", this.change, "디비저장하기");
    this.router.navigate(['pages/tomorrow']);        
  }

}
