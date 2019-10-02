export enum UserRole {
    FirstDegree, SecondDegree, ThirdDegree, Admin
}

export class User {
    id: number;
    username: string;
    role: UserRole;
}
