"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const commentTableUtils_1 = require("./commentTableUtils");
async function listComments(websiteUrl) {
    const params = {
        TableName: commentTableUtils_1.getTableName(),
        Key: {
            PK: commentTableUtils_1.getPK({ websiteUrl: websiteUrl }),
        },
    };
    try {
        const data = await docClient.query(params).promise();
        const items = data.Items;
        console.log(items);
        return items;
    }
    catch (err) {
        console.log('DynamoDB error', err);
        return null;
    }
}
exports.default = listComments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdENvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdENvbW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwRCwyREFBMEQ7QUFFMUQsS0FBSyxVQUFVLFlBQVksQ0FBQyxVQUFrQjtJQUMxQyxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxnQ0FBWSxFQUFFO1FBQ3pCLEdBQUcsRUFBRTtZQUNELEVBQUUsRUFBRSx5QkFBSyxDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDO1NBQ3RDO0tBQ0osQ0FBQztJQUVGLElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBQUMsT0FBTSxHQUFHLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBRUQsa0JBQWUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuaW1wb3J0IHsgZ2V0VGFibGVOYW1lLCBnZXRQSyB9IGZyb20gXCIuL2NvbW1lbnRUYWJsZVV0aWxzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGxpc3RDb21tZW50cyh3ZWJzaXRlVXJsOiBTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIFRhYmxlTmFtZTogZ2V0VGFibGVOYW1lKCksXG4gICAgICAgIEtleToge1xuICAgICAgICAgICAgUEs6IGdldFBLKHt3ZWJzaXRlVXJsOiB3ZWJzaXRlVXJsfSksXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkb2NDbGllbnQucXVlcnkocGFyYW1zKS5wcm9taXNlKCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZGF0YS5JdGVtcztcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpO1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0R5bmFtb0RCIGVycm9yJywgZXJyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENvbW1lbnRzO1xuIl19