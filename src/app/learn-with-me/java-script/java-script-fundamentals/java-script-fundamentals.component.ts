import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-java-script-fundamentals',
  templateUrl: './java-script-fundamentals.component.html',
  styleUrls: ['./java-script-fundamentals.component.scss']
})
export class JavaScriptFundamentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getText(val) {
    switch (val) {
      case 'first': return "Greater/less than: a > b, a < b."
      case 'second': return `Greater/less than or equals: a >= b, a <= b`
    }
  }
  getClassByValue(value: string) {
    switch (value) {
      case "script": return `<script>`
      case "/script": return `</script>`
      case "html": return `<html>`
      case "/html": return `</html>`
      case "head": return `<head>`
      case "/head": return `</head>`
      case "title": return `<title>`
      case "/title": return `</title>`
      case "body": return `<body>`
      case "/body": return `</body>`
      case "/h1": return `</h1>`
      case "h1": return `<h1>`
    }
  }
}
