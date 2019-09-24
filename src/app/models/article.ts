import { Category } from './category';

export interface Article {
    id: number;
    title: string;
    author: any;
    categories: Category[];
    content: string;
}
