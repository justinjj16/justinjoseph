(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"51GU":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("lR5k"),s=n("tyNb"),r=n("fXoL");const a=function(){return["/learn-with-me/aws/preSignedUrl"]},d=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-aws"]],decls:5,vars:2,consts:[[1,"border","container"],[1,"row","mx-0"],[1,"col-6","col-md-4","py-4","d-flex","justify-content-center"],[1,"cursor-pointer",3,"routerLink"]],template:function(e,t){1&e&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"span",3),r.mc(4,"PreSignedUrl"),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&e&&(r.zb(3),r.cc("routerLink",r.dc(1,a)))},directives:[s.b],styles:[""]}),e})()},{path:"preSignedUrl",component:(()=>{class e{constructor(){this.crossorgin='```javascript\n  [\n    {\n        "AllowedHeaders": [\n            "*"\n        ],\n        "AllowedMethods": [\n            "PUT",\n            "POST",\n            "DELETE",\n            "GET",\n            "HEAD"\n        ],\n        "AllowedOrigins": [\n            "*"\n        ],\n        "ExposeHeaders": [\n            "x-amz-server-side-encryption",\n            "x-amz-request-id",\n            "x-amz-id-2"\n        ],\n        "MaxAgeSeconds": 3000\n    }\n]\n  ```',this.presignedUrlCode="```javascript\n  import aws from 'aws-sdk';\n\n  const s3 = new aws.S3({ signatureVersion: 'v4' });\n  \n  s3.config.update({\n    signatureVersion: 'v4',\n    region: aws-region,\n    accessKeyId: acess_key_id,\n    secretAccessKey: secret_access_key\n  });\n\n  const fileType = contentType\n    let presignedPUTURL = await s3.getSignedUrl('putObject', {\n      Bucket: S3_BUCKET_Name,\n      Key: fileName,\n      Expires: 1000,\n      ContentType: fileType,\n    });\n      \n    return presignedPUTURL;\n  ```",this.presignedUrlexample="```javascript\n  https://presignedurldemo.s3.eu-west-2.amazonaws.com/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJWZ7B6WCRGMKFGQ%2F20180210%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20180210T171315Z&X-Amz-Expires=1800&X-Amz-Signature=12b74b0788aa036bc7c3d03b3f20c61f1f91cc9ad8873e3314255dc479a25351&X-Amz-SignedHeaders=host\n  ```",this.presignedUrlPutRequest="```javascript\n  const setImageUploadUsing = async() => {\n    const awsS3ImageUpload = await axios.put(presignedUrl, file);\n    return awsS3ImageUpload;\n  }\n  ```"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-pre-signed-url"]],decls:86,vars:4,consts:[[1,"presignedurl"],[1,"w-75","m-auto",2,"height","400px"],["src","assets/images/presignedUrl.png","alt","",1,"w-100","h-100"],[1,"w-75","m-auto"],[1,"d-flex","justify-content-center"],[1,"d-flex","justify-content-center","overflow-auto"],[1,"variable-binding",3,"data"],[1,"variable-binding","overflow-auto",3,"data"],[1,"font-weight-bold"]],template:function(e,t){1&e&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Lb(2,"img",2),r.Ob(),r.Pb(3,"div",3),r.Pb(4,"div",4),r.Pb(5,"h3"),r.mc(6,"File Uploads Directly to S3 From the Browser"),r.Ob(),r.Ob(),r.Pb(7,"div"),r.Pb(8,"p"),r.mc(9,"Uploading files to S3 directly from the browser is a great way to increase performance by removing the need to process and then re-upload files from your own server."),r.Ob(),r.Ob(),r.Pb(10,"div"),r.Pb(11,"h2"),r.mc(12,"Overview"),r.Ob(),r.Ob(),r.Pb(13,"div"),r.Pb(14,"p"),r.mc(15," A traditional approach to file uploading would typically involve the client making a PUT request to an endpoint on your API server. Your API server would then be responsible for processing the handling of the transfer of the file itself, and any subsequent processing you might want to perform (image resizing/thumbnail generation etc). "),r.Ob(),r.Ob(),r.Pb(16,"div"),r.Pb(17,"p"),r.mc(18," There's certainly nothing wrong with this approach, however these days many people opt to use third party storage solutions, like S3, to avoid having to implement a scalable storage solution of their own. Great, right? This now means your API server has to transfer the file(s) to S3 and incur additional resource costs. "),r.Ob(),r.Ob(),r.Pb(19,"div"),r.Pb(20,"p"),r.mc(21," What if you could avoid these resource costs, think RAM, CPU, bandwidth in and out, etc by having your client upload directly to S3? Enter pre-signed PUT requests! "),r.Ob(),r.Ob(),r.Pb(22,"div"),r.Pb(23,"p"),r.mc(24," Pre-signed PUT requests allow the client to upload directly to S3, bypassing your server entirely. Your API server is only tasked with generating the pre-signed PUT request and providing it to the client, no file handling at all! As you can imagine, this frees up significant resources which can then be utilized for handling additional API requests. "),r.Ob(),r.Ob(),r.Pb(25,"div"),r.Pb(26,"p"),r.mc(27," You might be wondering how we can perform any additional processes, like thumbnail generation for example, if we never actually get our hands on the file. This is where lambda functions come in handy! "),r.Ob(),r.Ob(),r.Pb(28,"div"),r.Pb(29,"p"),r.mc(30," Although outside the scope of this particular put, I will look to address put upload processing with lambda functions in a future put! "),r.Ob(),r.Ob(),r.Pb(31,"div"),r.Pb(32,"h2"),r.mc(33,"Process summary"),r.Ob(),r.Ob(),r.Pb(34,"div"),r.Pb(35,"ul"),r.Pb(36,"li"),r.mc(37," The client makes a request to an endpoint which responds with a URL and pre-signed put data. "),r.Ob(),r.Pb(38,"li"),r.mc(39," The client then uses the provided URL and pre-signed PUT data to form a request containing the file to be uploaded directly to S3. "),r.Ob(),r.Ob(),r.Ob(),r.Pb(40,"div"),r.Pb(41,"p"),r.mc(42,"Now that we've gone over the benefits of utilizing pre-signed PUT requests over the traditional approach, let's dive in further and take a look at how to implement them!"),r.Ob(),r.Ob(),r.Pb(43,"div"),r.Pb(44,"h2"),r.mc(45,"S3 bucket CORS"),r.Ob(),r.Ob(),r.Pb(46,"div"),r.Pb(47,"p"),r.mc(48," Assuming you already have an S3 bucket you'd like to upload your files to, the next step is to modify the bucket's CORS configuration to allow PUT requests. "),r.Ob(),r.Ob(),r.Pb(49,"div",5),r.Lb(50,"markdown",6),r.Ob(),r.Pb(51,"div"),r.Pb(52,"p"),r.mc(53,"Once that's done it's time to create our pre-signed PUT request!"),r.Ob(),r.Ob(),r.Pb(54,"div"),r.Pb(55,"h2"),r.mc(56,"Creating the pre-signed PUT request"),r.Ob(),r.Ob(),r.Pb(57,"div"),r.Pb(58,"p"),r.mc(59," An endpoint on your server that's accessible to the client would contain code similar to the following: "),r.Ob(),r.Ob(),r.Pb(60,"div",5),r.Lb(61,"markdown",6),r.Ob(),r.Pb(62,"div"),r.Pb(63,"p"),r.mc(64," Specific conditions may be specified to add validation to the request. In this case, we verify that the file size is less than 100000000 bytes and that the content-type of the file begins with 'image/'. "),r.Ob(),r.Ob(),r.Pb(65,"div"),r.Pb(66,"p"),r.mc(67," It's also worth noting that additional custom meta information can be specified. Here we specify the user id of the person uploading the file which would be useful in put upload processing when we need to associate the file with the uploader. "),r.Ob(),r.Ob(),r.Pb(68,"div"),r.Pb(69,"p"),r.mc(70,"The result of getSignedUrl would look something like the following:"),r.Ob(),r.Ob(),r.Pb(71,"div",5),r.Lb(72,"markdown",7),r.Ob(),r.Pb(73,"div"),r.Pb(74,"h2"),r.mc(75,"Uploading the file to S3"),r.Ob(),r.Ob(),r.Pb(76,"div"),r.Pb(77,"p"),r.mc(78," Once we've written the code to create a pre-signed PUT request, it's time to create the request itself and upload the file to S3! "),r.Ob(),r.Ob(),r.Pb(79,"div",5),r.Lb(80,"markdown",6),r.Ob(),r.Pb(81,"div"),r.Pb(82,"p"),r.Pb(83,"span",8),r.mc(84,"note:"),r.Ob(),r.mc(85," the file must be the full file not FormData. "),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&e&&(r.zb(50),r.cc("data",t.crossorgin),r.zb(11),r.cc("data",t.presignedUrlCode),r.zb(11),r.cc("data",t.presignedUrlexample),r.zb(8),r.cc("data",t.presignedUrlPutRequest))},directives:[o.a],styles:[""]}),e})()}];let c=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(d)],s.d]}),e})();n.d(t,"AWSModule",(function(){return l}));let l=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[i.b,c,o.b.forRoot()]]}),e})()}}]);