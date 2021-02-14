(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"bm/D":function(t,e,a){"use strict";a.r(e);var n=a("ofXK"),i=a("lR5k"),c=a("tyNb"),r=a("fXoL");const o=function(){return["/learn-with-me/javaScript/introduction"]},s=function(){return["/learn-with-me/javaScript/fundamentals"]},b=function(){return["/learn-with-me/javaScript/objects"]},l=function(){return["/learn-with-me/javaScript/dataType"]},d=function(){return["/learn-with-me/javaScript/promise"]},m=function(){return["/learn-with-me/javaScript/modules"]},u=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script"]],decls:20,vars:12,consts:[[1,"border","container"],[1,"row","mx-0"],[1,"col-6","col-md-4","py-4","d-flex","justify-content-center"],[1,"cursor-pointer",3,"routerLink"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"span",3),r.mc(4,"Introduction"),r.Ob(),r.Ob(),r.Pb(5,"div",2),r.Pb(6,"span",3),r.mc(7,"Fundamentals"),r.Ob(),r.Ob(),r.Pb(8,"div",2),r.Pb(9,"span",3),r.mc(10,"Objets"),r.Ob(),r.Ob(),r.Pb(11,"div",2),r.Pb(12,"span",3),r.mc(13,"Data Types"),r.Ob(),r.Ob(),r.Pb(14,"div",2),r.Pb(15,"span",3),r.mc(16,"Promise, async /await"),r.Ob(),r.Ob(),r.Pb(17,"div",2),r.Pb(18,"span",3),r.mc(19,"Modules"),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t&&(r.zb(3),r.cc("routerLink",r.dc(6,o)),r.zb(3),r.cc("routerLink",r.dc(7,s)),r.zb(3),r.cc("routerLink",r.dc(8,b)),r.zb(3),r.cc("routerLink",r.dc(9,l)),r.zb(3),r.cc("routerLink",r.dc(10,d)),r.zb(3),r.cc("routerLink",r.dc(11,m)))},directives:[c.b],styles:[""]}),t})()},{path:"introduction",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script-introduction"]],decls:35,vars:0,consts:[[1,"row","mx-0","pt-4"],[1,"col-md-2","d-none","d-md-block"],[1,"py-2"],[1,"col-md-10"],[1,""]],template:function(t,e){1&t&&(r.Pb(0,"div"),r.Pb(1,"div",0),r.Pb(2,"div",1),r.Pb(3,"div",2),r.Pb(4,"h6"),r.mc(5,"What is JavaScript?"),r.Ob(),r.Ob(),r.Pb(6,"div",2),r.Pb(7,"h6"),r.mc(8,"Why is it called JavaScript"),r.Ob(),r.Ob(),r.Pb(9,"div",2),r.Pb(10,"h6"),r.mc(11,"What makes JavaScript unique?"),r.Ob(),r.Ob(),r.Ob(),r.Pb(12,"div",3),r.Pb(13,"div",4),r.Pb(14,"div",2),r.Pb(15,"h4",2),r.mc(16,"What is JavaScript?"),r.Ob(),r.Pb(17,"span",2),r.mc(18,"JavaScript was initially created to \u201cmake web pages alive\u201d."),r.Ob(),r.Ob(),r.Pb(19,"div",2),r.Pb(20,"h4",2),r.mc(21,"Why is it called JavaScript"),r.Ob(),r.Pb(22,"div",2),r.mc(23,"When JavaScript was created, it initially had another name: \u201cLiveScript\u201d. But Java was very popular at that time, so it was decided that positioning a new language as a \u201cyounger brother\u201d of Java would help. But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all."),r.Ob(),r.Pb(24,"div",2),r.mc(25,"Today, JavaScript can execute not only in the browser, but also on the server,"),r.Ob(),r.Ob(),r.Pb(26,"div",2),r.Pb(27,"h4",2),r.mc(28,"What makes JavaScript unique?"),r.Ob(),r.Pb(29,"div",2),r.mc(30,"Full integration with HTML/CSS."),r.Ob(),r.Pb(31,"div",2),r.mc(32,"Simple things are done simply."),r.Ob(),r.Pb(33,"div",2),r.mc(34,"Support by all major browsers and enabled by default."),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob())},styles:[""]}),t})()},{path:"fundamentals",component:(()=>{class t{constructor(){this.markdown="\n  ```html\n  <html>\n    <head>\n        <title> learn with me </title>\n    </head>\n    <body>\n      <h1> Hi Justin </h1>\n    </body>\n  </html>\n```\n",this.consoleJustin="```javascript\nconsole.log('Hi Justin');\n```",this.inlineConnent="```typescript\n  // This comment occupies a line of its own\n  alert('Hello');\n  \n  alert('World'); // This comment follows the statement\n  ```",this.multipleComment="```javascript\n  /* An example with two messages.\n  This is a multiline comment.\n  */\n  alert('Hello');\n  alert('World');\n```",this.letMessage="```javascript\n  let message;\n```",this.letmessageHellow="```javascript\n  let message; message = 'Hello'; // store the string\n```",this.letmessageHelloComment="```javascript\nlet message; message = 'Hello!'; alert(message); // shows the variable content\n```",this.varmessage="```javascript\nvar message = 'Hello';\n```",this.constBirthday="```javascript\n  const myBirthday = '18.04.1982';\n  ```",this.letN="```javascript\n  let n = 123;\n  ```",this.bigInt='```javascript\n  // the "n" at the end means it\'s a BigInt const bigInt = 1234567890123456789012345678901234567890n;\n  ```',this.strings='```javascript\n  let name = "justin"\n  ```',this.booleam="```javascript\n  let flag = true\n  ```",this.nullValeu="```javascript\n  let age = null;\n  ```",this.undifined="```javascript\n  let age = undefined;\n  ```",this.objectvalue="```javascript\n  let obj = {name:'justin',age:27}\n  ```",this.adding="```javascript\n  let x = 3; let y = 4; let z = x + y;\n  ```",this.subscraction="```javascript\n  let x = 3; let y = 4; let z = x - y;\n  ```",this.multilipication="```javascript\n  let x = 3; let y = 4; let z = x * y;\n  ```",this.division="```javascript\n  let x = 10; let y = 2; let z = x / y;\n  ```",this.reminder="```javascript\n  let x = 10; let y = 3; let z = x % y;\n  ```",this.expolantion="```javascript\n  let x = 2; let y = 4; let z = x ** y;\n  ```",this.comparisonsEg1="```javascript\n  alert( 2 > 1 ); // true (correct) alert( 2 == 1 ); // false (wrong) alert( 2 != 1 ); // true (correct)\n  ```",this.comparisonsEg2="```javascript\n  alert( 'Z' > 'A' ); // true alert( 'Glow' > 'Glee' ); // true alert( 'Bee' > 'Be' ); // true\n  ```",this.comparisonsEg3="```javascript\n  alert( 0 == false ); // true alert( '' == false ); // true\n  ```",this.comparisonsEg4="```javascript\n  alert( null === undefined ); // false\n  ```",this.conditional="```javascript\n  if (year == 2015) { \n    alert( 'That's correct!'' );\n    alert( 'You're so smart!' );\n  }\n  ```"}ngOnInit(){}getText(t){switch(t){case"first":return"Greater/less than: a > b, a < b.";case"second":return"Greater/less than or equals: a >= b, a <= b"}}getClassByValue(t){switch(t){case"script":return"<script>";case"/script":return"<\/script>";case"html":return"<html>";case"/html":return"</html>";case"head":return"<head>";case"/head":return"</head>";case"title":return"<title>";case"/title":return"</title>";case"body":return"<body>";case"/body":return"</body>";case"/h1":return"</h1>";case"h1":return"<h1>"}}navigate(t){t.scrollIntoView({behavior:"smooth"})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script-fundamentals"]],decls:241,vars:30,consts:[[1,"row","mx-0"],[1,"col-md-2","d-none","d-md-block"],[1,"py-2","cursor-pointer"],[3,"click"],[1,"py-2","cursor-pointer",3,"click"],[1,"col-md-10","to-scrool"],[1,""],[1,"py-2"],["hellojustin",""],[1,"code-display","p-1"],[1,"variable-binding","px-5","py-3",3,"data"],["comments",""],["variable",""],[1,"variable-binding",3,"data"],["datatype",""],[1,"pt-3"],["basicoperator",""],["comparisons",""],["conditional",""]],template:function(t,e){if(1&t){const t=r.Qb();r.Pb(0,"div"),r.Pb(1,"div",0),r.Pb(2,"div",1),r.Pb(3,"div",2),r.Pb(4,"h6",3),r.Xb("click",(function(){r.gc(t);const a=r.fc(27);return e.navigate(a)})),r.mc(5,"Hello, Justin !"),r.Ob(),r.Ob(),r.Pb(6,"div",4),r.Xb("click",(function(){r.gc(t);const a=r.fc(44);return e.navigate(a)})),r.Pb(7,"h6"),r.mc(8,"Comments"),r.Ob(),r.Ob(),r.Pb(9,"div",4),r.Xb("click",(function(){r.gc(t);const a=r.fc(54);return e.navigate(a)})),r.Pb(10,"h6"),r.mc(11,"Variables"),r.Ob(),r.Ob(),r.Pb(12,"div",4),r.Xb("click",(function(){r.gc(t);const a=r.fc(83);return e.navigate(a)})),r.Pb(13,"h6"),r.mc(14,"DataTypes"),r.Ob(),r.Ob(),r.Pb(15,"div",4),r.Xb("click",(function(){r.gc(t);const a=r.fc(140);return e.navigate(a)})),r.Pb(16,"h6"),r.mc(17,"Basic operators, maths"),r.Ob(),r.Ob(),r.Pb(18,"div",4),r.Xb("click",(function(){r.gc(t);const a=r.fc(176);return e.navigate(a)})),r.Pb(19,"h6"),r.mc(20,"Comparisons"),r.Ob(),r.Ob(),r.Pb(21,"div",4),r.Xb("click",(function(){r.gc(t);const a=r.fc(228);return e.navigate(a)})),r.Pb(22,"h6"),r.mc(23,"Conditional"),r.Ob(),r.Ob(),r.Ob(),r.Pb(24,"div",5),r.Pb(25,"div",6),r.Pb(26,"div",7,8),r.Pb(28,"h4",7),r.mc(29,"Hello, Justin !"),r.Ob(),r.Pb(30,"div",7),r.mc(31,"This part of the tutorial is about core JavaScript, the language itself. JavaScript programs can be inserted into any part of an HTML document with the help of the "),r.Pb(32,"span",9),r.mc(33),r.Ob(),r.mc(34," tag."),r.Ob(),r.Pb(35,"div"),r.mc(36,"How to Tag javascript in HTML page"),r.Ob(),r.Pb(37,"div"),r.mc(38,"Create a .html file and create a sample.js file"),r.Ob(),r.Lb(39,"markdown",10),r.Pb(40,"div",6),r.mc(41," you can check javascript was connected "),r.Lb(42,"markdown",10),r.Ob(),r.Ob(),r.Pb(43,"div",7,11),r.Pb(45,"h4",7),r.mc(46,"Comments"),r.Ob(),r.Pb(47,"div",7),r.mc(48,"1)One-line comments start with two forward slash characters //"),r.Ob(),r.Lb(49,"markdown",10),r.Pb(50,"div",7),r.mc(51,"2)Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */."),r.Ob(),r.Lb(52,"markdown",10),r.Ob(),r.Pb(53,"div",7,12),r.Pb(55,"h4",7),r.mc(56,"Variables"),r.Ob(),r.Pb(57,"div"),r.mc(58,"1) let Variables are used to store this information.To create a variable in JavaScript, use the let keyword. The statement below creates (in other words: declares) a variable with the name \u201cmessage\u201d:"),r.Ob(),r.Lb(59,"markdown",13),r.Pb(60,"div",6),r.mc(61," Now, we can put some data into it by using the assignment operator =: "),r.Ob(),r.Lb(62,"markdown",13),r.Pb(63,"div",6),r.mc(64," The string is now saved into the memory area associated with the variable. We can access it using the variable name: "),r.Ob(),r.Lb(65,"markdown",13),r.Pb(66,"div"),r.mc(67,"In older scripts, you may also find another keyword: var instead of let"),r.Ob(),r.Lb(68,"markdown",13),r.Pb(69,"div"),r.mc(70," 2) const "),r.Ob(),r.Pb(71,"div"),r.mc(72,"To declare a constant (unchanging) variable, use const instead of let"),r.Ob(),r.Lb(73,"markdown",13),r.Pb(74,"div"),r.mc(75,"We can declare variables to store data by using the var, let, or const keywords."),r.Ob(),r.Pb(76,"div"),r.mc(77,"let \u2013 is a modern variable declaration."),r.Ob(),r.Pb(78,"div"),r.mc(79,'var \u2013 is an old-school variable declaration. Normally we don\u2019t use it at all, but we\u2019ll cover subtle differences from let in the chapter The old "var", just in case you need them.'),r.Ob(),r.Pb(80,"div"),r.mc(81,"const \u2013 is like let, but the value of the variable can\u2019t be changed. "),r.Ob(),r.Ob(),r.Pb(82,"div",7,14),r.Pb(84,"h4",7),r.mc(85,"Data Type"),r.Ob(),r.Pb(86,"div"),r.mc(87,"A value in JavaScript is always of a certain type. For example, a string or a number."),r.Ob(),r.Pb(88,"div"),r.mc(89,"There are 8 basic data types in JavaScript."),r.Ob(),r.Pb(90,"div"),r.mc(91,"1) number for numbers of any kind: integer or floating-point, integers are limited by \xb1253."),r.Ob(),r.Pb(92,"div"),r.mc(93,"2) bigint is for integer numbers of arbitrary length."),r.Ob(),r.Pb(94,"div"),r.mc(95,"3) string for strings. A string may have zero or more characters, there\u2019s no separate single-character type."),r.Ob(),r.Pb(96,"div"),r.mc(97,"4) boolean for true/false."),r.Ob(),r.Pb(98,"div"),r.mc(99,"5) null for unknown values \u2013 a standalone type that has a single value null."),r.Ob(),r.Pb(100,"div"),r.mc(101,"6) undefined for unassigned values \u2013 a standalone type that has a single value undefined."),r.Ob(),r.Pb(102,"div"),r.mc(103,"7) object for more complex data structures."),r.Ob(),r.Pb(104,"div"),r.mc(105,"8) symbol for unique identifiers."),r.Ob(),r.Pb(106,"div"),r.mc(107,"1) number "),r.Ob(),r.Lb(108,"markdown",13),r.Pb(109,"div"),r.mc(110,"2)bigint"),r.Ob(),r.Lb(111,"markdown",13),r.Pb(112,"div"),r.mc(113,"3) string"),r.Ob(),r.Lb(114,"markdown",13),r.Pb(115,"div"),r.mc(116,"4) boolean"),r.Ob(),r.Lb(117,"markdown",13),r.Pb(118,"div"),r.mc(119,"5)null"),r.Ob(),r.Lb(120,"markdown",13),r.Pb(121,"div"),r.mc(122,"6) undefined"),r.Ob(),r.Lb(123,"markdown",13),r.Pb(124,"div"),r.mc(125,"7) object"),r.Ob(),r.Lb(126,"markdown",13),r.Pb(127,"div"),r.mc(128,"8) symbol"),r.Ob(),r.Pb(129,"div"),r.mc(130,"The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects."),r.Ob(),r.Pb(131,"div",15),r.mc(132,"The typeof operator allows us to see which type is stored in a variable."),r.Ob(),r.Pb(133,"div"),r.mc(134,"Two forms: typeof x or typeof(x)."),r.Ob(),r.Pb(135,"div"),r.mc(136,'Returns a string with the name of the type, like "string".'),r.Ob(),r.Pb(137,"div"),r.mc(138,'For null returns "object" \u2013 this is an error in the language, it\u2019s not actually an object.'),r.Ob(),r.Ob(),r.Pb(139,"div",7,16),r.Pb(141,"h4",7),r.mc(142,"Basic operators, maths"),r.Ob(),r.Pb(143,"div"),r.mc(144,"The following math operations are supported:"),r.Ob(),r.Pb(145,"div"),r.mc(146,"1)Addition +,"),r.Ob(),r.Pb(147,"div"),r.mc(148,"2)Subtraction -,"),r.Ob(),r.Pb(149,"div"),r.mc(150,"3)Multiplication *,"),r.Ob(),r.Pb(151,"div"),r.mc(152,"4)Division /,"),r.Ob(),r.Pb(153,"div"),r.mc(154,"5)Remainder %,"),r.Ob(),r.Pb(155,"div"),r.mc(156,"6)Exponentiation **."),r.Ob(),r.Pb(157,"div",15),r.mc(158,"1)Addition +"),r.Ob(),r.Lb(159,"markdown",13),r.Pb(160,"div"),r.mc(161,"2)Subtraction -,"),r.Ob(),r.Lb(162,"markdown",13),r.Pb(163,"div"),r.mc(164,"3)Multiplication *,"),r.Ob(),r.Lb(165,"markdown",13),r.Pb(166,"div"),r.mc(167,"4)Division /,"),r.Ob(),r.Lb(168,"markdown",13),r.Pb(169,"div"),r.mc(170,"5)Remainder %,"),r.Ob(),r.Lb(171,"markdown",13),r.Pb(172,"div"),r.mc(173,"6)Exponentiation **."),r.Ob(),r.Lb(174,"markdown",13),r.Ob(),r.Pb(175,"div",7,17),r.Pb(177,"h4"),r.mc(178,"Comparisons"),r.Ob(),r.Pb(179,"div"),r.mc(180," In JavaScript they are written like this: "),r.Ob(),r.Pb(181,"div"),r.mc(182),r.Ob(),r.Pb(183,"div"),r.mc(184),r.Ob(),r.Pb(185,"div"),r.mc(186,"Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment."),r.Ob(),r.Pb(187,"div"),r.mc(188,"Not equals. In maths the notation is \u2260, but in JavaScript it\u2019s written as a != b"),r.Ob(),r.Pb(189,"div"),r.Pb(190,"h6"),r.mc(191,"Boolean is the result"),r.Ob(),r.Ob(),r.Pb(192,"div"),r.mc(193,"All comparison operators return a boolean value:"),r.Ob(),r.Pb(194,"div"),r.mc(195,"true \u2013 means \u201cyes\u201d, \u201ccorrect\u201d or \u201cthe truth\u201d."),r.Ob(),r.Pb(196,"div"),r.mc(197,"false \u2013 means \u201cno\u201d, \u201cwrong\u201d or \u201cnot the truth\u201d."),r.Ob(),r.Pb(198,"div"),r.mc(199,"For example:"),r.Ob(),r.Lb(200,"markdown",13),r.Pb(201,"div"),r.Pb(202,"h6"),r.mc(203,"String comparison"),r.Ob(),r.Ob(),r.Pb(204,"div"),r.mc(205,"To see whether a string is greater than another, JavaScript uses the so-called \u201cdictionary\u201d or \u201clexicographical\u201d order."),r.Ob(),r.Pb(206,"div"),r.mc(207,"In other words, strings are compared letter-by-letter."),r.Ob(),r.Pb(208,"div"),r.mc(209,"For example:"),r.Ob(),r.Lb(210,"markdown",13),r.Pb(211,"div"),r.Pb(212,"h6"),r.mc(213,"Strict equality"),r.Ob(),r.Ob(),r.Pb(214,"div"),r.mc(215,"A regular equality check == has a problem. It cannot differentiate 0 from false:"),r.Ob(),r.Lb(216,"markdown",13),r.Pb(217,"div"),r.Pb(218,"h6"),r.mc(219,"Comparison with null and undefined"),r.Ob(),r.Ob(),r.Pb(220,"div"),r.mc(221,"There\u2019s a non-intuitive behavior when null or undefined are compared to other values."),r.Ob(),r.Pb(222,"div"),r.mc(223,"For a strict equality check ==="),r.Ob(),r.Pb(224,"div"),r.mc(225,"These values are different, because each of them is a different type. "),r.Ob(),r.Lb(226,"markdown",13),r.Ob(),r.Pb(227,"div",7,18),r.Pb(229,"h4"),r.mc(230,"Conditional"),r.Ob(),r.Pb(231,"div"),r.mc(232,"Sometimes, we need to perform different actions based on different conditions"),r.Ob(),r.Pb(233,"div"),r.mc(234,"To do that, we can use the if statement and the conditional operator ?, that\u2019s also called a \u201cquestion mark\u201d operator."),r.Ob(),r.Pb(235,"div"),r.Pb(236,"h6"),r.mc(237,"The \u201cif\u201d statement"),r.Ob(),r.Ob(),r.Pb(238,"div"),r.mc(239,"For example:"),r.Ob(),r.Lb(240,"markdown",13),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob()}if(2&t){const t=r.fc(228);r.zb(33),r.nc(e.getClassByValue("script")),r.zb(6),r.cc("data",e.markdown),r.zb(3),r.cc("data",e.consoleJustin),r.zb(7),r.cc("data",e.inlineConnent),r.zb(3),r.cc("data",e.multipleComment),r.zb(7),r.cc("data",e.letMessage),r.zb(3),r.cc("data",e.letmessageHellow),r.zb(3),r.cc("data",e.letmessageHelloComment),r.zb(3),r.cc("data",e.varmessage),r.zb(5),r.cc("data",e.constBirthday),r.zb(35),r.cc("data",e.letN),r.zb(3),r.cc("data",e.bigInt),r.zb(3),r.cc("data",e.strings),r.zb(3),r.cc("data",e.booleam),r.zb(3),r.cc("data",e.nullValeu),r.zb(3),r.cc("data",e.undifined),r.zb(3),r.cc("data",e.objectvalue),r.zb(33),r.cc("data",e.adding),r.zb(3),r.cc("data",e.subscraction),r.zb(3),r.cc("data",e.multilipication),r.zb(3),r.cc("data",e.division),r.zb(3),r.cc("data",e.reminder),r.zb(3),r.cc("data",e.expolantion),r.zb(8),r.nc(e.getText("first")),r.zb(2),r.oc("",e.getText("second")," "),r.zb(16),r.cc("data",e.comparisonsEg1),r.zb(10),r.cc("data",e.comparisonsEg2),r.zb(6),r.cc("data",e.comparisonsEg3),r.zb(10),r.cc("data",e.comparisonsEg4),r.zb(14),r.cc("data",t)}},directives:[i.a],styles:[".tag[_ngcontent-%COMP%]{color:#905}.punctuation[_ngcontent-%COMP%]{color:#999}.attr-name[_ngcontent-%COMP%]{color:#690}.to-scrool[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(100vh - 75px);min-height:calc(100vh - 75px)}"]}),t})()},{path:"objects",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script-objets"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.mc(1,"java-script-objets works!"),r.Ob())},styles:[""]}),t})()},{path:"dataType",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script-data-type"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.mc(1,"java-script-data-type works!"),r.Ob())},styles:[""]}),t})()},{path:"promise",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script-promis-async"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.mc(1,"java-script-promis-async works!"),r.Ob())},styles:[""]}),t})()},{path:"modules",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-java-script-modules"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.mc(1,"java-script-modules works!"),r.Ob())},styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[c.d.forChild(u)],c.d]}),t})();a.d(e,"JavaScriptModule",(function(){return v}));let v=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[n.b,p,i.b.forRoot()]]}),t})()}}]);