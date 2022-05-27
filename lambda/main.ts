import addComment from './addComment';
import Comment from './Comment';
import CommentIdentifier from './CommentIdentifier';
import CommentInput from './CommentInput';
import listComments from './listComments';
import removeComment from './removeComment';

type AppSyncEvent = {
    info: {
        fieldName: string,
    },
    arguments: {
        comment: CommentInput,
        commentIdentifier: CommentIdentifier,
        websiteUrl: string,
    },
}

exports.handler = async (event: AppSyncEvent) => {
    switch (event.info.fieldName) {
        case "addComment":
            return await addComment(event.arguments.comment);
        case "listComments":
            return await listComments(event.arguments.websiteUrl);
        case "removeComment":
            return await removeComment(event.arguments.commentIdentifier);
        default: 
            return null;
    }
}