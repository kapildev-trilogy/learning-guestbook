"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const commentTableUtils_1 = require("./commentTableUtils");
async function addComment(comment) {
    const currrentTime = new Date();
    const currrentTimestamp = currrentTime.toISOString();
    const commentWithCreationDate = {
        ...comment,
        creationDate: currrentTimestamp,
    };
    const params = {
        TableName: commentTableUtils_1.getTableName(),
        Item: {
            'PK': commentTableUtils_1.getPK({ websiteUrl: commentWithCreationDate.websiteUrl }),
            'SK': commentTableUtils_1.getSK({ creationDate: commentWithCreationDate.creationDate, authorEmail: commentWithCreationDate.authorEmail }),
            ...commentWithCreationDate,
        },
    };
    try {
        await docClient.put(params).promise();
        return commentWithCreationDate;
    }
    catch (err) {
        console.log("DynamoDB error: ", err);
        return null;
    }
}
exports.default = addComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZENvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRXBELDJEQUFpRTtBQUVqRSxLQUFLLFVBQVUsVUFBVSxDQUFDLE9BQXFCO0lBQzNDLE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsTUFBTSx1QkFBdUIsR0FBRztRQUM1QixHQUFHLE9BQU87UUFDVixZQUFZLEVBQUUsaUJBQWlCO0tBQ2xDLENBQUE7SUFDRCxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxnQ0FBWSxFQUFFO1FBQ3pCLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSx5QkFBSyxDQUFDLEVBQUMsVUFBVSxFQUFFLHVCQUF1QixDQUFDLFVBQVUsRUFBQyxDQUFDO1lBQzdELElBQUksRUFBRSx5QkFBSyxDQUFDLEVBQUMsWUFBWSxFQUFFLHVCQUF1QixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsdUJBQXVCLENBQUMsV0FBVyxFQUFDLENBQUM7WUFDbkgsR0FBRyx1QkFBdUI7U0FDN0I7S0FDSixDQUFDO0lBRUYsSUFBSTtRQUNBLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxPQUFPLHVCQUF1QixDQUFDO0tBQ2xDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuaW1wb3J0IENvbW1lbnRJbnB1dCBmcm9tICcuL0NvbW1lbnRJbnB1dCc7XG5pbXBvcnQgeyBnZXRQSywgZ2V0U0ssIGdldFRhYmxlTmFtZSB9IGZyb20gJy4vY29tbWVudFRhYmxlVXRpbHMnO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRDb21tZW50KGNvbW1lbnQ6IENvbW1lbnRJbnB1dCkge1xuICAgIGNvbnN0IGN1cnJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycnJlbnRUaW1lc3RhbXAgPSBjdXJycmVudFRpbWUudG9JU09TdHJpbmcoKTtcbiAgICBjb25zdCBjb21tZW50V2l0aENyZWF0aW9uRGF0ZSA9IHtcbiAgICAgICAgLi4uY29tbWVudCxcbiAgICAgICAgY3JlYXRpb25EYXRlOiBjdXJycmVudFRpbWVzdGFtcCxcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBUYWJsZU5hbWU6IGdldFRhYmxlTmFtZSgpLFxuICAgICAgICBJdGVtOiB7XG4gICAgICAgICAgICAnUEsnOiBnZXRQSyh7d2Vic2l0ZVVybDogY29tbWVudFdpdGhDcmVhdGlvbkRhdGUud2Vic2l0ZVVybH0pLFxuICAgICAgICAgICAgJ1NLJzogZ2V0U0soe2NyZWF0aW9uRGF0ZTogY29tbWVudFdpdGhDcmVhdGlvbkRhdGUuY3JlYXRpb25EYXRlLCBhdXRob3JFbWFpbDogY29tbWVudFdpdGhDcmVhdGlvbkRhdGUuYXV0aG9yRW1haWx9KSxcbiAgICAgICAgICAgIC4uLmNvbW1lbnRXaXRoQ3JlYXRpb25EYXRlLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkb2NDbGllbnQucHV0KHBhcmFtcykucHJvbWlzZSgpO1xuICAgICAgICByZXR1cm4gY29tbWVudFdpdGhDcmVhdGlvbkRhdGU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHluYW1vREIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENvbW1lbnQ7XG4iXX0=