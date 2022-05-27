const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import CommentIdentifier from "./CommentIdentifier";
import { getPK, getSK, getTableName } from "./commentTableUtils";

async function removeComment(commentIdentifier: CommentIdentifier) {
    const params = {
        TableName: getTableName(),
        Key: {
            PK: getPK({websiteUrl: commentIdentifier.websiteUrl}),
            SK: getSK({creationDate: commentIdentifier.creationDate, authorEmail: commentIdentifier.authorEmail}),
        },
    };

    try {
        await docClient.delete(params).promise();
        return params;
    } catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }
}

export default removeComment;