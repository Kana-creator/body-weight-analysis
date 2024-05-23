export default interface SignUpModel {
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirm_password?: string;
}
