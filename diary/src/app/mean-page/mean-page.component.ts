import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mean-page',
  templateUrl: './mean-page.component.html',
  styleUrls: ['./mean-page.component.css']
})
export class MeanPageComponent implements OnInit {

  public meaning: string = 'mean_default';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goNext(){
    this.meaning = (<HTMLInputElement>document.getElementById('meaning')).value;
    console.log("meaning:", this.meaning, "디비저장하기");
    this.router.navigate(['pages/change']);        
  }

}

