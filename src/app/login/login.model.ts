export interface UserLogin {
  Username: string;
  IsCall: boolean;
  IsRegister?: true;
}

export interface UserVerifyCode {
  CustomerId: string;
  VerificationCode: number;
}
