import { Category } from './Category';
import { User } from './User';


export class Article {
    id: number;
    title: string;
    author: User;
    category: Category;
    content: string;
    creationDate: Date;
}
