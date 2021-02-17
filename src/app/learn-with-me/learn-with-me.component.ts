import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn-with-me',
  templateUrl: './learn-with-me.component.html',
  styleUrls: ['./learn-with-me.component.scss']
})
export class LearnWithMeComponent implements OnInit,OnChanges {

  currentUrl: string = '';
  constructor(private router: Router) {
    this.currentUrl = router.url;
    console.log(this.router)
  }
  

  ngOnInit() {
    console.log(this.currentUrl)
  }
  ngOnChanges(){
    console.log(this.router)
  }
  

}
