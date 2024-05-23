export interface UserModel {
  userId?: number;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmNassword?: string;
}
