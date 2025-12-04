export interface User {
  name: string;
  email: string;
}

export interface UserFormState {
  user: User;
  setUser: (user: User) => void;
}
