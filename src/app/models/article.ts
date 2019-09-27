import { Category } from './category';
import { User } from './user';

export interface Article {
    id: number;
    title: string;
    author: User;
    category: Category;
    content: string;
    creationDate: Date;
}
