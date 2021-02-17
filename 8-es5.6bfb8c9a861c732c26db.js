function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"bm/D":function(e,t,a){"use strict";a.r(t);var n,i,c,r,o,s,b,l,d=a("ofXK"),m=a("lR5k"),u=a("tyNb"),v=a("fXoL"),p=function(){return["/learn-with-me/javaScript/introduction"]},h=function(){return["/learn-with-me/javaScript/fundamentals"]},f=[{path:"",component:(b=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=v.Eb({type:b,selectors:[["app-java-script"]],decls:8,vars:4,consts:[[1,"border","container"],[1,"row","mx-0"],[1,"col-6","col-md-4","py-4","d-flex","justify-content-center"],[1,"cursor-pointer",3,"routerLink"]],template:function(e,t){1&e&&(v.Pb(0,"div",0),v.Pb(1,"div",1),v.Pb(2,"div",2),v.Pb(3,"span",3),v.mc(4,"Introduction"),v.Ob(),v.Ob(),v.Pb(5,"div",2),v.Pb(6,"span",3),v.mc(7,"Fundamentals"),v.Ob(),v.Ob(),v.Ob(),v.Ob()),2&e&&(v.zb(3),v.cc("routerLink",v.dc(2,p)),v.zb(3),v.cc("routerLink",v.dc(3,h)))},directives:[u.b],styles:[""]}),b)},{path:"introduction",component:(s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=v.Eb({type:s,selectors:[["app-java-script-introduction"]],decls:35,vars:0,consts:[[1,"row","mx-0","pt-4"],[1,"col-md-2","d-none","d-md-block"],[1,"py-2"],[1,"col-md-10"],[1,""]],template:function(e,t){1&e&&(v.Pb(0,"div"),v.Pb(1,"div",0),v.Pb(2,"div",1),v.Pb(3,"div",2),v.Pb(4,"h6"),v.mc(5,"What is JavaScript?"),v.Ob(),v.Ob(),v.Pb(6,"div",2),v.Pb(7,"h6"),v.mc(8,"Why is it called JavaScript"),v.Ob(),v.Ob(),v.Pb(9,"div",2),v.Pb(10,"h6"),v.mc(11,"What makes JavaScript unique?"),v.Ob(),v.Ob(),v.Ob(),v.Pb(12,"div",3),v.Pb(13,"div",4),v.Pb(14,"div",2),v.Pb(15,"h4",2),v.mc(16,"What is JavaScript?"),v.Ob(),v.Pb(17,"span",2),v.mc(18,"JavaScript was initially created to \u201cmake web pages alive\u201d."),v.Ob(),v.Ob(),v.Pb(19,"div",2),v.Pb(20,"h4",2),v.mc(21,"Why is it called JavaScript"),v.Ob(),v.Pb(22,"div",2),v.mc(23,"When JavaScript was created, it initially had another name: \u201cLiveScript\u201d. But Java was very popular at that time, so it was decided that positioning a new language as a \u201cyounger brother\u201d of Java would help. But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all."),v.Ob(),v.Pb(24,"div",2),v.mc(25,"Today, JavaScript can execute not only in the browser, but also on the server,"),v.Ob(),v.Ob(),v.Pb(26,"div",2),v.Pb(27,"h4",2),v.mc(28,"What makes JavaScript unique?"),v.Ob(),v.Pb(29,"div",2),v.mc(30,"Full integration with HTML/CSS."),v.Ob(),v.Pb(31,"div",2),v.mc(32,"Simple things are done simply."),v.Ob(),v.Pb(33,"div",2),v.mc(34,"Support by all major browsers and enabled by default."),v.Ob(),v.Ob(),v.Ob(),v.Ob(),v.Ob(),v.Ob())},styles:[""]}),s)},{path:"fundamentals",component:(o=function(){function e(){_classCallCheck(this,e),this.markdown="\n  ```html\n  <html>\n    <head>\n        <title> learn with me </title>\n    </head>\n    <body>\n      <h1> Hi Justin </h1>\n    </body>\n  </html>\n```\n",this.consoleJustin="```javascript\nconsole.log('Hi Justin');\n```",this.inlineConnent="```typescript\n  // This comment occupies a line of its own\n  alert('Hello');\n  \n  alert('World'); // This comment follows the statement\n  ```",this.multipleComment="```javascript\n  /* An example with two messages.\n  This is a multiline comment.\n  */\n  alert('Hello');\n  alert('World');\n```",this.letMessage="```javascript\n  let message;\n```",this.letmessageHellow="```javascript\n  let message; message = 'Hello'; // store the string\n```",this.letmessageHelloComment="```javascript\nlet message; message = 'Hello!'; alert(message); // shows the variable content\n```",this.varmessage="```javascript\nvar message = 'Hello';\n```",this.constBirthday="```javascript\n  const myBirthday = '18.04.1982';\n  ```",this.letN="```javascript\n  let n = 123;\n  ```",this.bigInt='```javascript\n  // the "n" at the end means it\'s a BigInt const bigInt = 1234567890123456789012345678901234567890n;\n  ```',this.strings='```javascript\n  let name = "justin"\n  ```',this.booleam="```javascript\n  let flag = true\n  ```",this.nullValeu="```javascript\n  let age = null;\n  ```",this.undifined="```javascript\n  let age = undefined;\n  ```",this.objectvalue="```javascript\n  let obj = {name:'justin',age:27}\n  ```",this.adding="```javascript\n  let x = 3; let y = 4; let z = x + y;\n  ```",this.subscraction="```javascript\n  let x = 3; let y = 4; let z = x - y;\n  ```",this.multilipication="```javascript\n  let x = 3; let y = 4; let z = x * y;\n  ```",this.division="```javascript\n  let x = 10; let y = 2; let z = x / y;\n  ```",this.reminder="```javascript\n  let x = 10; let y = 3; let z = x % y;\n  ```",this.expolantion="```javascript\n  let x = 2; let y = 4; let z = x ** y;\n  ```",this.comparisonsEg1="```javascript\n  alert( 2 > 1 ); // true (correct) alert( 2 == 1 ); // false (wrong) alert( 2 != 1 ); // true (correct)\n  ```",this.comparisonsEg2="```javascript\n  alert( 'Z' > 'A' ); // true alert( 'Glow' > 'Glee' ); // true alert( 'Bee' > 'Be' ); // true\n  ```",this.comparisonsEg3="```javascript\n  alert( 0 == false ); // true alert( '' == false ); // true\n  ```",this.comparisonsEg4="```javascript\n  alert( null === undefined ); // false\n  ```",this.conditional="```javascript\n  if (year == 2015) { \n    alert( 'That's correct!'' );\n    alert( 'You're so smart!' );\n  }\n  ```"}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getText",value:function(e){switch(e){case"first":return"Greater/less than: a > b, a < b.";case"second":return"Greater/less than or equals: a >= b, a <= b"}}},{key:"getClassByValue",value:function(e){switch(e){case"script":return"<script>";case"/script":return"<\/script>";case"html":return"<html>";case"/html":return"</html>";case"head":return"<head>";case"/head":return"</head>";case"title":return"<title>";case"/title":return"</title>";case"body":return"<body>";case"/body":return"</body>";case"/h1":return"</h1>";case"h1":return"<h1>"}}},{key:"navigate",value:function(e){e.scrollIntoView({behavior:"smooth"})}}]),e}(),o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=v.Eb({type:o,selectors:[["app-java-script-fundamentals"]],decls:241,vars:30,consts:[[1,"row","mx-0"],[1,"col-md-2","d-none","d-md-block"],[1,"py-2","cursor-pointer"],[3,"click"],[1,"py-2","cursor-pointer",3,"click"],[1,"col-md-10","to-scrool"],[1,""],[1,"py-2"],["hellojustin",""],[1,"code-display","p-1"],[1,"variable-binding","px-5","py-3",3,"data"],["comments",""],["variable",""],[1,"variable-binding",3,"data"],["datatype",""],[1,"pt-3"],["basicoperator",""],["comparisons",""],["conditional",""]],template:function(e,t){if(1&e){var a=v.Qb();v.Pb(0,"div"),v.Pb(1,"div",0),v.Pb(2,"div",1),v.Pb(3,"div",2),v.Pb(4,"h6",3),v.Xb("click",(function(){v.gc(a);var e=v.fc(27);return t.navigate(e)})),v.mc(5,"Hello, Justin !"),v.Ob(),v.Ob(),v.Pb(6,"div",4),v.Xb("click",(function(){v.gc(a);var e=v.fc(44);return t.navigate(e)})),v.Pb(7,"h6"),v.mc(8,"Comments"),v.Ob(),v.Ob(),v.Pb(9,"div",4),v.Xb("click",(function(){v.gc(a);var e=v.fc(54);return t.navigate(e)})),v.Pb(10,"h6"),v.mc(11,"Variables"),v.Ob(),v.Ob(),v.Pb(12,"div",4),v.Xb("click",(function(){v.gc(a);var e=v.fc(83);return t.navigate(e)})),v.Pb(13,"h6"),v.mc(14,"DataTypes"),v.Ob(),v.Ob(),v.Pb(15,"div",4),v.Xb("click",(function(){v.gc(a);var e=v.fc(140);return t.navigate(e)})),v.Pb(16,"h6"),v.mc(17,"Basic operators, maths"),v.Ob(),v.Ob(),v.Pb(18,"div",4),v.Xb("click",(function(){v.gc(a);var e=v.fc(176);return t.navigate(e)})),v.Pb(19,"h6"),v.mc(20,"Comparisons"),v.Ob(),v.Ob(),v.Pb(21,"div",4),v.Xb("click",(function(){v.gc(a);var e=v.fc(228);return t.navigate(e)})),v.Pb(22,"h6"),v.mc(23,"Conditional"),v.Ob(),v.Ob(),v.Ob(),v.Pb(24,"div",5),v.Pb(25,"div",6),v.Pb(26,"div",7,8),v.Pb(28,"h4",7),v.mc(29,"Hello, Justin !"),v.Ob(),v.Pb(30,"div",7),v.mc(31,"This part of the tutorial is about core JavaScript, the language itself. JavaScript programs can be inserted into any part of an HTML document with the help of the "),v.Pb(32,"span",9),v.mc(33),v.Ob(),v.mc(34," tag."),v.Ob(),v.Pb(35,"div"),v.mc(36,"How to Tag javascript in HTML page"),v.Ob(),v.Pb(37,"div"),v.mc(38,"Create a .html file and create a sample.js file"),v.Ob(),v.Lb(39,"markdown",10),v.Pb(40,"div",6),v.mc(41," you can check javascript was connected "),v.Lb(42,"markdown",10),v.Ob(),v.Ob(),v.Pb(43,"div",7,11),v.Pb(45,"h4",7),v.mc(46,"Comments"),v.Ob(),v.Pb(47,"div",7),v.mc(48,"1)One-line comments start with two forward slash characters //"),v.Ob(),v.Lb(49,"markdown",10),v.Pb(50,"div",7),v.mc(51,"2)Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */."),v.Ob(),v.Lb(52,"markdown",10),v.Ob(),v.Pb(53,"div",7,12),v.Pb(55,"h4",7),v.mc(56,"Variables"),v.Ob(),v.Pb(57,"div"),v.mc(58,"1) let Variables are used to store this information.To create a variable in JavaScript, use the let keyword. The statement below creates (in other words: declares) a variable with the name \u201cmessage\u201d:"),v.Ob(),v.Lb(59,"markdown",13),v.Pb(60,"div",6),v.mc(61," Now, we can put some data into it by using the assignment operator =: "),v.Ob(),v.Lb(62,"markdown",13),v.Pb(63,"div",6),v.mc(64," The string is now saved into the memory area associated with the variable. We can access it using the variable name: "),v.Ob(),v.Lb(65,"markdown",13),v.Pb(66,"div"),v.mc(67,"In older scripts, you may also find another keyword: var instead of let"),v.Ob(),v.Lb(68,"markdown",13),v.Pb(69,"div"),v.mc(70," 2) const "),v.Ob(),v.Pb(71,"div"),v.mc(72,"To declare a constant (unchanging) variable, use const instead of let"),v.Ob(),v.Lb(73,"markdown",13),v.Pb(74,"div"),v.mc(75,"We can declare variables to store data by using the var, let, or const keywords."),v.Ob(),v.Pb(76,"div"),v.mc(77,"let \u2013 is a modern variable declaration."),v.Ob(),v.Pb(78,"div"),v.mc(79,'var \u2013 is an old-school variable declaration. Normally we don\u2019t use it at all, but we\u2019ll cover subtle differences from let in the chapter The old "var", just in case you need them.'),v.Ob(),v.Pb(80,"div"),v.mc(81,"const \u2013 is like let, but the value of the variable can\u2019t be changed. "),v.Ob(),v.Ob(),v.Pb(82,"div",7,14),v.Pb(84,"h4",7),v.mc(85,"Data Type"),v.Ob(),v.Pb(86,"div"),v.mc(87,"A value in JavaScript is always of a certain type. For example, a string or a number."),v.Ob(),v.Pb(88,"div"),v.mc(89,"There are 8 basic data types in JavaScript."),v.Ob(),v.Pb(90,"div"),v.mc(91,"1) number for numbers of any kind: integer or floating-point, integers are limited by \xb1253."),v.Ob(),v.Pb(92,"div"),v.mc(93,"2) bigint is for integer numbers of arbitrary length."),v.Ob(),v.Pb(94,"div"),v.mc(95,"3) string for strings. A string may have zero or more characters, there\u2019s no separate single-character type."),v.Ob(),v.Pb(96,"div"),v.mc(97,"4) boolean for true/false."),v.Ob(),v.Pb(98,"div"),v.mc(99,"5) null for unknown values \u2013 a standalone type that has a single value null."),v.Ob(),v.Pb(100,"div"),v.mc(101,"6) undefined for unassigned values \u2013 a standalone type that has a single value undefined."),v.Ob(),v.Pb(102,"div"),v.mc(103,"7) object for more complex data structures."),v.Ob(),v.Pb(104,"div"),v.mc(105,"8) symbol for unique identifiers."),v.Ob(),v.Pb(106,"div"),v.mc(107,"1) number "),v.Ob(),v.Lb(108,"markdown",13),v.Pb(109,"div"),v.mc(110,"2)bigint"),v.Ob(),v.Lb(111,"markdown",13),v.Pb(112,"div"),v.mc(113,"3) string"),v.Ob(),v.Lb(114,"markdown",13),v.Pb(115,"div"),v.mc(116,"4) boolean"),v.Ob(),v.Lb(117,"markdown",13),v.Pb(118,"div"),v.mc(119,"5)null"),v.Ob(),v.Lb(120,"markdown",13),v.Pb(121,"div"),v.mc(122,"6) undefined"),v.Ob(),v.Lb(123,"markdown",13),v.Pb(124,"div"),v.mc(125,"7) object"),v.Ob(),v.Lb(126,"markdown",13),v.Pb(127,"div"),v.mc(128,"8) symbol"),v.Ob(),v.Pb(129,"div"),v.mc(130,"The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects."),v.Ob(),v.Pb(131,"div",15),v.mc(132,"The typeof operator allows us to see which type is stored in a variable."),v.Ob(),v.Pb(133,"div"),v.mc(134,"Two forms: typeof x or typeof(x)."),v.Ob(),v.Pb(135,"div"),v.mc(136,'Returns a string with the name of the type, like "string".'),v.Ob(),v.Pb(137,"div"),v.mc(138,'For null returns "object" \u2013 this is an error in the language, it\u2019s not actually an object.'),v.Ob(),v.Ob(),v.Pb(139,"div",7,16),v.Pb(141,"h4",7),v.mc(142,"Basic operators, maths"),v.Ob(),v.Pb(143,"div"),v.mc(144,"The following math operations are supported:"),v.Ob(),v.Pb(145,"div"),v.mc(146,"1)Addition +,"),v.Ob(),v.Pb(147,"div"),v.mc(148,"2)Subtraction -,"),v.Ob(),v.Pb(149,"div"),v.mc(150,"3)Multiplication *,"),v.Ob(),v.Pb(151,"div"),v.mc(152,"4)Division /,"),v.Ob(),v.Pb(153,"div"),v.mc(154,"5)Remainder %,"),v.Ob(),v.Pb(155,"div"),v.mc(156,"6)Exponentiation **."),v.Ob(),v.Pb(157,"div",15),v.mc(158,"1)Addition +"),v.Ob(),v.Lb(159,"markdown",13),v.Pb(160,"div"),v.mc(161,"2)Subtraction -,"),v.Ob(),v.Lb(162,"markdown",13),v.Pb(163,"div"),v.mc(164,"3)Multiplication *,"),v.Ob(),v.Lb(165,"markdown",13),v.Pb(166,"div"),v.mc(167,"4)Division /,"),v.Ob(),v.Lb(168,"markdown",13),v.Pb(169,"div"),v.mc(170,"5)Remainder %,"),v.Ob(),v.Lb(171,"markdown",13),v.Pb(172,"div"),v.mc(173,"6)Exponentiation **."),v.Ob(),v.Lb(174,"markdown",13),v.Ob(),v.Pb(175,"div",7,17),v.Pb(177,"h4"),v.mc(178,"Comparisons"),v.Ob(),v.Pb(179,"div"),v.mc(180," In JavaScript they are written like this: "),v.Ob(),v.Pb(181,"div"),v.mc(182),v.Ob(),v.Pb(183,"div"),v.mc(184),v.Ob(),v.Pb(185,"div"),v.mc(186,"Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment."),v.Ob(),v.Pb(187,"div"),v.mc(188,"Not equals. In maths the notation is \u2260, but in JavaScript it\u2019s written as a != b"),v.Ob(),v.Pb(189,"div"),v.Pb(190,"h6"),v.mc(191,"Boolean is the result"),v.Ob(),v.Ob(),v.Pb(192,"div"),v.mc(193,"All comparison operators return a boolean value:"),v.Ob(),v.Pb(194,"div"),v.mc(195,"true \u2013 means \u201cyes\u201d, \u201ccorrect\u201d or \u201cthe truth\u201d."),v.Ob(),v.Pb(196,"div"),v.mc(197,"false \u2013 means \u201cno\u201d, \u201cwrong\u201d or \u201cnot the truth\u201d."),v.Ob(),v.Pb(198,"div"),v.mc(199,"For example:"),v.Ob(),v.Lb(200,"markdown",13),v.Pb(201,"div"),v.Pb(202,"h6"),v.mc(203,"String comparison"),v.Ob(),v.Ob(),v.Pb(204,"div"),v.mc(205,"To see whether a string is greater than another, JavaScript uses the so-called \u201cdictionary\u201d or \u201clexicographical\u201d order."),v.Ob(),v.Pb(206,"div"),v.mc(207,"In other words, strings are compared letter-by-letter."),v.Ob(),v.Pb(208,"div"),v.mc(209,"For example:"),v.Ob(),v.Lb(210,"markdown",13),v.Pb(211,"div"),v.Pb(212,"h6"),v.mc(213,"Strict equality"),v.Ob(),v.Ob(),v.Pb(214,"div"),v.mc(215,"A regular equality check == has a problem. It cannot differentiate 0 from false:"),v.Ob(),v.Lb(216,"markdown",13),v.Pb(217,"div"),v.Pb(218,"h6"),v.mc(219,"Comparison with null and undefined"),v.Ob(),v.Ob(),v.Pb(220,"div"),v.mc(221,"There\u2019s a non-intuitive behavior when null or undefined are compared to other values."),v.Ob(),v.Pb(222,"div"),v.mc(223,"For a strict equality check ==="),v.Ob(),v.Pb(224,"div"),v.mc(225,"These values are different, because each of them is a different type. "),v.Ob(),v.Lb(226,"markdown",13),v.Ob(),v.Pb(227,"div",7,18),v.Pb(229,"h4"),v.mc(230,"Conditional"),v.Ob(),v.Pb(231,"div"),v.mc(232,"Sometimes, we need to perform different actions based on different conditions"),v.Ob(),v.Pb(233,"div"),v.mc(234,"To do that, we can use the if statement and the conditional operator ?, that\u2019s also called a \u201cquestion mark\u201d operator."),v.Ob(),v.Pb(235,"div"),v.Pb(236,"h6"),v.mc(237,"The \u201cif\u201d statement"),v.Ob(),v.Ob(),v.Pb(238,"div"),v.mc(239,"For example:"),v.Ob(),v.Lb(240,"markdown",13),v.Ob(),v.Ob(),v.Ob(),v.Ob(),v.Ob()}if(2&e){var n=v.fc(228);v.zb(33),v.nc(t.getClassByValue("script")),v.zb(6),v.cc("data",t.markdown),v.zb(3),v.cc("data",t.consoleJustin),v.zb(7),v.cc("data",t.inlineConnent),v.zb(3),v.cc("data",t.multipleComment),v.zb(7),v.cc("data",t.letMessage),v.zb(3),v.cc("data",t.letmessageHellow),v.zb(3),v.cc("data",t.letmessageHelloComment),v.zb(3),v.cc("data",t.varmessage),v.zb(5),v.cc("data",t.constBirthday),v.zb(35),v.cc("data",t.letN),v.zb(3),v.cc("data",t.bigInt),v.zb(3),v.cc("data",t.strings),v.zb(3),v.cc("data",t.booleam),v.zb(3),v.cc("data",t.nullValeu),v.zb(3),v.cc("data",t.undifined),v.zb(3),v.cc("data",t.objectvalue),v.zb(33),v.cc("data",t.adding),v.zb(3),v.cc("data",t.subscraction),v.zb(3),v.cc("data",t.multilipication),v.zb(3),v.cc("data",t.division),v.zb(3),v.cc("data",t.reminder),v.zb(3),v.cc("data",t.expolantion),v.zb(8),v.nc(t.getText("first")),v.zb(2),v.oc("",t.getText("second")," "),v.zb(16),v.cc("data",t.comparisonsEg1),v.zb(10),v.cc("data",t.comparisonsEg2),v.zb(6),v.cc("data",t.comparisonsEg3),v.zb(10),v.cc("data",t.comparisonsEg4),v.zb(14),v.cc("data",n)}},directives:[m.a],styles:[".tag[_ngcontent-%COMP%]{color:#905}.punctuation[_ngcontent-%COMP%]{color:#999}.attr-name[_ngcontent-%COMP%]{color:#690}.to-scrool[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(100vh - 75px);min-height:calc(100vh - 75px)}"]}),o)},{path:"objects",component:(r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=v.Eb({type:r,selectors:[["app-java-script-objets"]],decls:2,vars:0,template:function(e,t){1&e&&(v.Pb(0,"p"),v.mc(1,"java-script-objets works!"),v.Ob())},styles:[""]}),r)},{path:"dataType",component:(c=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=v.Eb({type:c,selectors:[["app-java-script-data-type"]],decls:2,vars:0,template:function(e,t){1&e&&(v.Pb(0,"p"),v.mc(1,"java-script-data-type works!"),v.Ob())},styles:[""]}),c)},{path:"promise",component:(i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v.Eb({type:i,selectors:[["app-java-script-promis-async"]],decls:2,vars:0,template:function(e,t){1&e&&(v.Pb(0,"p"),v.mc(1,"java-script-promis-async works!"),v.Ob())},styles:[""]}),i)},{path:"modules",component:(n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=v.Eb({type:n,selectors:[["app-java-script-modules"]],decls:2,vars:0,template:function(e,t){1&e&&(v.Pb(0,"p"),v.mc(1,"java-script-modules works!"),v.Ob())},styles:[""]}),n)}],O=((l=function e(){_classCallCheck(this,e)}).\u0275mod=v.Ib({type:l}),l.\u0275inj=v.Hb({factory:function(e){return new(e||l)},imports:[[u.d.forChild(f)],u.d]}),l);a.d(t,"JavaScriptModule",(function(){return g}));var P,g=((P=function e(){_classCallCheck(this,e)}).\u0275mod=v.Ib({type:P}),P.\u0275inj=v.Hb({factory:function(e){return new(e||P)},imports:[[d.b,O,m.b.forRoot()]]}),P)}}]);