# Queries to test with:

```
mutation AddComment($comment: CommentInput!) {
  addComment(comment: $comment) {
    authorEmail
    authorName
    comment
    websiteUrl
    creationDate
  }
}

mutation RemoveComment($commentIdentifier: CommentIdentifier!) {
  removeComment(commentIdentifier: $commentIdentifier) {
    authorEmail
    creationDate
    websiteUrl
  }
}

query ListComments($websiteUrl:String!) {
  listComments(websiteUrl: $websiteUrl) {
    authorEmail
    authorName
    comment
    creationDate
    websiteUrl
  }
}
```

*Query variables:*
```
{
  "comment": {
    "websiteUrl": "abc",
    "authorName": "Kapildev",
    "authorEmail": "kapildev@trilogy.com",
    "comment": "Some comment"
  },
  "commentIdentifier": {
    "websiteUrl": "abc",
    "creationDate": "2022-05-27T10:47:26.460Z",
    "authorEmail": "kapildev@trilogy.com"
  },
  "websiteUrl": "abc"
}
```
