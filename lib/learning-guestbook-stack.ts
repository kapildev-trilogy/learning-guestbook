// TODO: Use aws-sdk library
import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as ddb from '@aws-cdk/aws-dynamodb';
import * as lambda from '@aws-cdk/aws-lambda';

export class LearningGuestbookStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'guestbook-comment-api',
      schema: appsync.Schema.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365)),
          }
        }
      },
      xrayEnabled: true,
    });

    new cdk.CfnOutput(this, 'GraphQLAPIURL', {
      value: api.graphqlUrl,
    });

    new cdk.CfnOutput(this, 'GraphQLAPIKey', {
      value: api.apiKey || '',
    });

    new cdk.CfnOutput(this, 'Stack Region', {
      value: this.region,
    });

    const commentsLambda = new lambda.Function(this, 'AppSyncCommentsHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('lambda'),
      memorySize: 1024,
    });

    const lambdaDs = api.addLambdaDataSource('lambdaDataSource', commentsLambda);

    lambdaDs.createResolver({
      typeName: 'Query',
      fieldName: 'listComments',
    });

    lambdaDs.createResolver({
      typeName: 'Mutation',
      fieldName: 'addComment'
    });

    lambdaDs.createResolver({
      typeName: 'Mutation',
      fieldName: 'removeComment',
    });

    const commentsTable = new ddb.Table(this, 'CDKCommentsTable', {
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'PK',
        type: ddb.AttributeType.STRING,
      },
      sortKey: {
        name: 'SK',
        type: ddb.AttributeType.STRING,
      }
    });

    commentsTable.grantFullAccess(commentsLambda);
    commentsLambda.addEnvironment("COMMENTS_TABLE", commentsTable.tableName);
  }
}
