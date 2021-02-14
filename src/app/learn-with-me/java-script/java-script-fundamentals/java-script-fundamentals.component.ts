import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script-fundamentals',
  templateUrl: './java-script-fundamentals.component.html',
  styleUrls: ['./java-script-fundamentals.component.scss']
})
export class JavaScriptFundamentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  markdown = `
  \`\`\`html
  <html>
    <head>
        <title> learn with me </title>
    </head>
    <body>
      <h1> Hi Justin </h1>
    </body>
  </html>
\`\`\`
`;

  consoleJustin = `\`\`\`javascript
console.log('Hi Justin');
\`\`\``;

  inlineConnent = `\`\`\`typescript
  // This comment occupies a line of its own
  alert('Hello');
  
  alert('World'); // This comment follows the statement
  \`\`\``;

  multipleComment = `\`\`\`javascript
  /* An example with two messages.
  This is a multiline comment.
  */
  alert('Hello');
  alert('World');
\`\`\``;

  letMessage = `\`\`\`javascript
  let message;
\`\`\``;
  letmessageHellow = `\`\`\`javascript
  let message; message = 'Hello'; // store the string
\`\`\``;
  letmessageHelloComment = `\`\`\`javascript
let message; message = 'Hello!'; alert(message); // shows the variable content
\`\`\``;
  varmessage = `\`\`\`javascript
var message = 'Hello';
\`\`\``;
  constBirthday = `\`\`\`javascript
  const myBirthday = '18.04.1982';
  \`\`\``;
  letN = `\`\`\`javascript
  let n = 123;
  \`\`\``;
  bigInt = `\`\`\`javascript
  // the "n" at the end means it's a BigInt const bigInt = 1234567890123456789012345678901234567890n;
  \`\`\``;
  strings = `\`\`\`javascript
  let name = "justin"
  \`\`\``;
  booleam = `\`\`\`javascript
  let flag = true
  \`\`\``;
  nullValeu = `\`\`\`javascript
  let age = null;
  \`\`\``;
  undifined = `\`\`\`javascript
  let age = undefined;
  \`\`\``;
  objectvalue = `\`\`\`javascript
  let obj = {name:'justin',age:27}
  \`\`\``;
  adding = `\`\`\`javascript
  let x = 3; let y = 4; let z = x + y;
  \`\`\``;
  subscraction = `\`\`\`javascript
  let x = 3; let y = 4; let z = x - y;
  \`\`\``;
  multilipication = `\`\`\`javascript
  let x = 3; let y = 4; let z = x * y;
  \`\`\``;
  division = `\`\`\`javascript
  let x = 10; let y = 2; let z = x / y;
  \`\`\``;
  reminder = `\`\`\`javascript
  let x = 10; let y = 3; let z = x % y;
  \`\`\``;
  expolantion = `\`\`\`javascript
  let x = 2; let y = 4; let z = x ** y;
  \`\`\``;
  comparisonsEg1 = `\`\`\`javascript
  alert( 2 > 1 ); // true (correct) alert( 2 == 1 ); // false (wrong) alert( 2 != 1 ); // true (correct)
  \`\`\``;
  comparisonsEg2 = `\`\`\`javascript
  alert( 'Z' > 'A' ); // true alert( 'Glow' > 'Glee' ); // true alert( 'Bee' > 'Be' ); // true
  \`\`\``;
  comparisonsEg3 = `\`\`\`javascript
  alert( 0 == false ); // true alert( '' == false ); // true
  \`\`\``;
  comparisonsEg4 = `\`\`\`javascript
  alert( null === undefined ); // false
  \`\`\``;
  conditional = `\`\`\`javascript
  if (year == 2015) { 
    alert( 'That's correct!'' );
    alert( 'You're so smart!' );
  }
  \`\`\``;

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
  navigate(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
}
