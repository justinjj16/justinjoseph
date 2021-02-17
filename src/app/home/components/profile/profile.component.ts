import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  facebook() {
    window.open('https://www.facebook.com/justin.abin/', "_blank");
  }
  instagram() {
    window.open('https://www.instagram.com/justinjj16/', "_blank")
  }
  gitLab() {
    window.open('https://gitlab.com/justinjoseph08', "_blank")
  }
  gitHub() {
    window.open('https://github.com/justinjj16', "_blank");
  }
  linkedIn() {
    window.open('https://www.linkedin.com/in/justinjj16/', "_blank")
  }
  npmPackage() {
    window.open("https://www.npmjs.com/~justinjj16", "_blank");
  }
  stackoverFlow() {
    window.open("https://stackoverflow.com/story/justinjj08", "_blank")
  }
}
