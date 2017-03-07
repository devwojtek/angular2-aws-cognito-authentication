Cognito Quickstart
===================================================

# What does this app do?
![QuickStart Angular2 Cognito App](/aws/meta/Cognito-Angular2-QuickStart.png?raw=true)

# Tech Stack
## Required Tools
* [aws cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* [npm](https://www.npmjs.com/)
* [angular-cli](https://github.com/angular/angular-cli)

## Frameworks
* [AWS JavaScript SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-intro.html)
* [AWS Rekognition](https://aws.amazon.com/rekognition/)
* [Angular 2](https://angular.io/docs/ts/latest/quickstart.html)
    * [TypeScript](https://www.typescriptlang.org/docs/tutorial.html)
* [Bootstrap](http://getbootstrap.com/)

# AWS Setup
##### Install the required tools
* Create an AWS account
* Install [npm](https://www.npmjs.com/)
* Run ```npm install``` at the project's root level
* [Install or update your aws cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) 
* [Install angular-cli](https://github.com/angular/angular-cli)

##### This will install the AWS resources
* ```cd aws``` 
* ```./createResources.sh```


# Getting the code
```
# Clone it from github
git clone --depth 1 git@github.com:awslabs/aws-cognito-angular2-quickstart.git
```
```
# Install the NPM packages
npm install
```
```
# Run the app in dev mode
npm start
```
```
# Build the project and sync the output with the S3 bucket
ng build; cd dist; aws s3 sync . s3://budilov-cognito/
```
```
# Test it out
curl –I http://budilov-cognito.s3-website-us-east-1.amazonaws.com/
```

# Necessary changes
Modify the following 2 files with your newly-created AWS service ids (Cognito, DDB, etc)
```
src/environments/environment.ts
src/environments/environment.prod.ts
```

