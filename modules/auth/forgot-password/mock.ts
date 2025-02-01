const forgot_password_phone_content = {
  button_text: "Continue",
  title: "Enter phone number",
  question: "Switch to email address",
  subtitle:
    "Make sure it's the number you use with the iAlert account you lost access to",
};
const forgot_password_email_content = {
  button_text: "Continue",
  question: "Switch to phone numer",
  title: "Enter email address",
  subtitle:
    "Make sure it's the email you use with the iAlert account you lost access to",
};

export const getForgotPasswordContent = (isPhoneAuth: boolean) => {
  if (isPhoneAuth) {
    return forgot_password_phone_content;
  }
  return forgot_password_email_content;
};
