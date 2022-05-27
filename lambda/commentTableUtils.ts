export function getTableName() {
    return process.env.COMMENTS_TABLE;
}

type GetPKArg = {
    websiteUrl: String;
}

export function getPK({websiteUrl}: GetPKArg): String {
    return `URL#${websiteUrl}`;
}

type GetSKArg = {
    creationDate: String;
    authorEmail: String;
}

export function getSK({creationDate, authorEmail}: GetSKArg): String {
    return `CREATION_DATE${creationDate}#AUTHOR_EMAIL#${authorEmail}`;
}
