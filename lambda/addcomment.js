const {DynamoDB, Lambda} = require('aws-sdk');

exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));

    // const {commenterEmail, commenterName, comment, webpage} = event;
    const createdAt = new Date().toISOString();

    const dynamo = new DynamoDB();

    // const item = {
    //     'WebPage': webpage,
    //     'CreationDate': createdAt,
    //     'CommenterEmail': commenterEmail,
    //     'CommenterName': commenterName,
    //     'CommentText': comment,
    // }

    const item = {
        'WebPage': {S: 'webpage'},
        'CreationDate': {S: 'createdAt'},
        'CommenterEmail': {S: 'commenterEmail'},
        'CommenterName': {S: 'commenterName'},
        'CommentText': {S: 'comment'},
    }

    const response = await dynamo.putItem({
        TableName: process.env.GUEST_BOOK_TABLE,
        Item: item,
    }).promise();

    console.log("response:", JSON.stringify(response, undefined, 2));

    return {
        statusCode: 200,
        headers: {"Content-Type": "text/plain"},
        body: `You have successfully entered a value`,
    };
}
