import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { CommentConstruct } from './commentconstruct';

export class LearningGuestbookStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloWithCounter = new CommentConstruct(this, 'CommentService');

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWithCounter.handler,
    });
  }
}
