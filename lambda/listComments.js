"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const commentTableUtils_1 = require("./commentTableUtils");
async function listComments(websiteUrl) {
    const params = {
        TableName: commentTableUtils_1.getTableName(),
        KeyConditionExpression: `#pk = :pk`,
        ExpressionAttributeNames: {
            '#pk': 'PK',
        },
        ExpressionAttributeValues: {
            ':pk': commentTableUtils_1.getPK({ websiteUrl: websiteUrl }),
        }
    };
    try {
        const data = await docClient.query(params).promise();
        const items = data.Items;
        return items;
    }
    catch (err) {
        console.log('DynamoDB error', err);
        return null;
    }
}
exports.default = listComments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdENvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdENvbW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwRCwyREFBMEQ7QUFFMUQsS0FBSyxVQUFVLFlBQVksQ0FBQyxVQUFrQjtJQUMxQyxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxnQ0FBWSxFQUFFO1FBQ3pCLHNCQUFzQixFQUFFLFdBQVc7UUFDbkMsd0JBQXdCLEVBQUU7WUFDdEIsS0FBSyxFQUFFLElBQUk7U0FDZDtRQUNELHlCQUF5QixFQUFFO1lBQ3ZCLEtBQUssRUFBRSx5QkFBSyxDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDO1NBQ3pDO0tBQ0osQ0FBQztJQUVGLElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUFDLE9BQU0sR0FBRyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQUVELGtCQUFlLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFXUyA9IHJlcXVpcmUoJ2F3cy1zZGsnKTtcbmNvbnN0IGRvY0NsaWVudCA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbmltcG9ydCB7IGdldFRhYmxlTmFtZSwgZ2V0UEsgfSBmcm9tIFwiLi9jb21tZW50VGFibGVVdGlsc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBsaXN0Q29tbWVudHMod2Vic2l0ZVVybDogU3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBUYWJsZU5hbWU6IGdldFRhYmxlTmFtZSgpLFxuICAgICAgICBLZXlDb25kaXRpb25FeHByZXNzaW9uOiBgI3BrID0gOnBrYCxcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZU5hbWVzOiB7XG4gICAgICAgICAgICAnI3BrJzogJ1BLJyxcbiAgICAgICAgfSxcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuICAgICAgICAgICAgJzpwayc6IGdldFBLKHt3ZWJzaXRlVXJsOiB3ZWJzaXRlVXJsfSksXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRvY0NsaWVudC5xdWVyeShwYXJhbXMpLnByb21pc2UoKTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkYXRhLkl0ZW1zO1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0R5bmFtb0RCIGVycm9yJywgZXJyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENvbW1lbnRzO1xuIl19