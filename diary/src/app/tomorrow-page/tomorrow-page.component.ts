import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-tomorrow-page',
  templateUrl: './tomorrow-page.component.html',
  styleUrls: ['./tomorrow-page.component.css']
})
export class TomorrowPageComponent implements OnInit {
  public will: string = 'default_will';

  constructor(
    private router: Router,    
  ) { }

  ngOnInit() {
    document.getElementById('will').addEventListener('keyup', e => {
      if(e.keyCode==13) this.confirmName(); // 13 == enter
    });
  }

  confirmName(){
    // for modal
    var elem = document.querySelector('#modal1');
    var options = {
      opacity: 0.5,
    }
    var instance = M.Modal.init(elem, options);

    this.will = (<HTMLInputElement>document.getElementById('will')).value;    
    instance.open();
  }

  goNext(){
    console.log("will:", this.will, "디비저장하기");
    this.router.navigate(['pages/summary']);        
  }

}
