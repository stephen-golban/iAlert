export type AuthStackParamList = {
  welcome: undefined;
  "sign-in": undefined;
  otp: undefined;
  "forgot-password": undefined;
  "sign-up/index": undefined;
  "sign-up/otp": {
    phoneNumber: string;
  };
  "sign-up/user-info": {
    phoneNumber: string;
    otp: string;
  };
  "sign-up/car-info": {
    phoneNumber: string;
    otp: string;
    userInfo: {
      name: string;
      email: string;
    };
  };
};

export type MainStackParamList = {
  index: undefined;
};
