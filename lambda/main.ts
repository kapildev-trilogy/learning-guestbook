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
    arguments: CommentInput | CommentIdentifier | string,
}

exports.handler = async (event: AppSyncEvent) => {
    switch (event.info.fieldName) {
        case "addComment":
            return await addComment(event.arguments as CommentInput);
        case "listComments":
            return await listComments(event.arguments as string);
        case "removeComment":
            return await removeComment(event.arguments as CommentIdentifier);
        default: 
            return null;
    }
}