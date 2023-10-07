export class Comments {
    author : string;
    originalContent : string;
    replies : Comments[] | undefined;
    constructor(author : string, originalContent : string, replies? : Comments[]) {
        this.author = author;
        this.originalContent = originalContent;
        this.replies = replies;
    }
}