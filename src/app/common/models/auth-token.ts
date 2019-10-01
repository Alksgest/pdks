import { User } from './user';

export interface AuthToken {
    user: User;
    expirationTime: Date;
    isAdmin: boolean;
}
