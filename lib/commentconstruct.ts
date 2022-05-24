import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Code, Function, IFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class CommentConstruct extends Construct {

    public readonly handler: Function;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const table = new Table(this, 'GuestBook', {
            partitionKey: {
                name: 'WebPage',
                type: AttributeType.STRING,
            },
            sortKey: {
                name: 'CreationDate',
                type: AttributeType.STRING,
            },
            billingMode: BillingMode.PAY_PER_REQUEST,
        });

        this.handler = new Function(this, 'GuestBookAddCommentHandler', {
            runtime: Runtime.NODEJS_14_X,
            handler: 'addcomment.handler',
            code: Code.fromAsset('lambda'),
            environment: {
                GUEST_BOOK_TABLE: table.tableName,
            }
        });

        table.grantReadWriteData(this.handler);
    }
}
