import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-name-page',
  templateUrl: './name-page.component.html',
  styleUrls: ['./name-page.component.css']
})
export class NamePageComponent implements OnInit {
  public userName: string = 'user';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    document.getElementById('name').addEventListener('keyup', e => {
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

    this.userName = (<HTMLInputElement>document.getElementById('name')).value;
    instance.open();
  }

  goNext(){
    console.log("userName:", this.userName, "디비저장하기");    
    this.router.navigate(['pages/today']);        
  }

}
