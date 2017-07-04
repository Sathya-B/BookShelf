
export class Book {
    id?: number;
    bookName: string;
    authorName: string;
    purchaseDate: Date;
    notes?: string;
    currentstatus: Number;
    category?: Number;
}

export class BookDetails{    
    statusList: [{ statusdef: string, currentstatus: Number }] = [{statusdef: 'Completed Reading', currentstatus: 0}, {statusdef: 'Reading now', currentstatus: 1}, {statusdef:'Yet to Start', currentstatus: 2}];

    categoryList: [{ categorydef: string, category: Number}] = [{categorydef: 'Sciecne', category: 0}, {categorydef: 'History', category: 1}, {categorydef: 'Economics', category: 2}, {categorydef: 'AutoBiography', category: 3}]
}