
export type UserRole = 'NotAuthorized' | 'FirstDegree' | 'SecondDegree' | 'ThirdDegree' | 'Admin';

export const UserRole = {
    NotAuthorized: 'NotAuthorized' as UserRole,
    FirstDegree: 'FirstDegree' as UserRole,
    SecondDegree: 'SecondDegree' as UserRole,
    ThirdDegree: 'ThirdDegree' as UserRole,
    Admin: 'Admin' as UserRole
};
