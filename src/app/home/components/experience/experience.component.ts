import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  adhocTechnologies() {
    window.open("https://www.adhoctechnologies.org/", "_blank")
  }
  adhocInfoService() {
    window.open("https://www.adhoctechnologies.org/", "_blank")
  }
  neoIto() {
    window.open("https://www.neoito.com", "_blank");
  }

}
