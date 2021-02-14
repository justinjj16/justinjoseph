import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-signed-url',
  templateUrl: './pre-signed-url.component.html',
  styleUrls: ['./pre-signed-url.component.scss']
})
export class PreSignedUrlComponent implements OnInit {

  constructor() { }
  crossorgin = `\`\`\`javascript
  [
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "DELETE",
            "GET",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "x-amz-server-side-encryption",
            "x-amz-request-id",
            "x-amz-id-2"
        ],
        "MaxAgeSeconds": 3000
    }
]
  \`\`\``;
  presignedUrlCode = `\`\`\`javascript
  import aws from 'aws-sdk';

  const s3 = new aws.S3({ signatureVersion: 'v4' });
  
  s3.config.update({
    signatureVersion: 'v4',
    region: aws-region,
    accessKeyId: acess_key_id,
    secretAccessKey: secret_access_key
  });

  const fileType = contentType
    let presignedPUTURL = await s3.getSignedUrl('putObject', {
      Bucket: S3_BUCKET_Name,
      Key: fileName,
      Expires: 1000,
      ContentType: fileType,
    });
      
    return presignedPUTURL;
  \`\`\``;

  presignedUrlexample = `\`\`\`javascript
  https://presignedurldemo.s3.eu-west-2.amazonaws.com/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJJWZ7B6WCRGMKFGQ%2F20180210%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20180210T171315Z&X-Amz-Expires=1800&X-Amz-Signature=12b74b0788aa036bc7c3d03b3f20c61f1f91cc9ad8873e3314255dc479a25351&X-Amz-SignedHeaders=host
  \`\`\``;
  presignedUrlPutRequest = `\`\`\`javascript
  const setImageUploadUsing = async() => {
    const awsS3ImageUpload = await axios.put(presignedUrl, file);
    return awsS3ImageUpload;
  }
  \`\`\``;
  ngOnInit(): void {
  }

}
