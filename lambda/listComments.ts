const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import { getTableName, getPK } from "./commentTableUtils";

async function listComments(websiteUrl: String) {
    const params = {
        TableName: getTableName(),
        KeyConditionExpression: `#pk = :pk`,
        ExpressionAttributeNames: {
            '#pk': 'PK',
        },
        ExpressionAttributeValues: {
            ':pk': getPK({websiteUrl: websiteUrl}),
        }
    };

    try {
        const data = await docClient.query(params).promise();
        const items = data.Items;
        console.log(items);
        return items;
    } catch(err) {
        console.log('DynamoDB error', err);
        return null;
    } 
}

export default listComments;
