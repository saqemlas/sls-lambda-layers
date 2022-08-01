# Lambda Layers

## Info 

This handles deployment for a public http api with three integrated lambda functions, and lambda layer for runtime dependencies.

A Lambda layer is a .zip file archive that can contain additional code or data. A layer can contain libraries, a custom runtime, data, or configuration files. Layers promote code sharing and separation of responsibilities so that you can iterate faster on writing business logic. You can use layers only with Lambda functions deployed as a .zip file archive. For functions defined as a container image, you package your preferred runtime and all code dependencies when you create the container image. 

When you create a layer, you must bundle all its content into a .zip file archive. You upload the .zip file archive to your layer from Amazon Simple Storage Service (Amazon S3) or your local machine. Lambda extracts the layer contents into the /opt directory when setting up the execution environment for the function. You build your layer code into a .zip file archive using the same procedure that you would use for a function deployment package. If your layer includes any native code libraries, you must compile and build these libraries using a Linux development machine so that the binaries are compatible with Amazon Linux.

When you create a layer, you can specify whether the layer is compatible with one or both of the instruction set architectures. You may need to set specific compile flags to build a layer that is compatible with the arm64 architecture. You can also only attach 5 lambda layers to a single lambda function, but can have any amount of functions attached to a single lambda layers.


For more information...
- [Serverless Framework: Http Api Events](https://www.serverless.com/framework/docs/providers/aws/events/http-api)
- [Serverless Framework: Layers](https://www.serverless.com/framework/docs/providers/aws/guide/layers)
- [AWS Documentation: Creating and sharing Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
- [AWS Documentation: Using layers with your Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html)
- [AWS Documentation: Cloudformation UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html)
- [AWS Documentation: Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)


## Architecture

<p align="center">
  <img src="/architecture-diagram.drawio.svg" />
</p>

## Usage 

### Credentials:
```bash
export AWS_PROFILE=<profile_name>
```

### Install Dependencies:

```bash
yarn run install
```

### Deploy:

```bash
yarn run deploy
```

### Test Deployed Api:
*Check serverless output for api endpoints to test.*

- Fetch /sum path, for number addition
```bash
curl -H "Content-Type: application/json" -X GET https://<API_ID>.execute-api.<REGION>.amazonaws.com/sum/<a>/<b>
```

- Fetch /slug path, for web page screenshot test in postman or browser
```bash
curl -H "Content-Type: application/json" -X GET https://<API_ID>.execute-api.<REGION>.amazonaws.com/slug
```

- Fetch /catchAny path, for catching unused paths and methods
```bash
curl -H "Content-Type: application/json" -X GET https://<API_ID>.execute-api.<REGION>.amazonaws.com/
```

### Remove:

```bash
yarn run remove
```
