import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class LambdaVersioningStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const helloLambda = new lambda.Function(this, "helloLambda", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
      currentVersionOptions: { removalPolicy: cdk.RemovalPolicy.RETAIN },
    });

    helloLambda.addAlias("lastVersion");
  }
}
