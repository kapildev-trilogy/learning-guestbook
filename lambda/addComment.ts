const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
import CommentInput from './CommentInput';
import { getPK, getSK, getTableName } from './commentTableUtils';

async function addComment(comment: CommentInput) {
    const currrentTime = new Date();
    const currrentTimestamp = currrentTime.toISOString();
    const commentWithCreationDate = {
        ...comment,
        creationDate: currrentTimestamp,
    }
    const params = {
        TableName: getTableName(),
        Item: {
            'PK': getPK({websiteUrl: commentWithCreationDate.websiteUrl}),
            'SK': getSK({creationDate: commentWithCreationDate.creationDate, authorEmail: commentWithCreationDate.authorEmail}),
            ...commentWithCreationDate,
        },
    };

    try {
        await docClient.put(params).promise();
        return commentWithCreationDate;
    } catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}

export default addComment;
