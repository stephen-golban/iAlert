const phone_content = {
  title: "Welcome back",
  button_text: "Continue",
  question: "Lost access to my phone number",
  subtitle: "Enter the phone number associated with your iAlert account",
};

const login_email_content = {
  title: "Welcome back",
  button_text: "Continue",
  question: "Lost access to my email address",
  subtitle: "Enter the email address associated with your iAlert account",
};

export const getSignInContent = (isPhoneAuth: boolean) => {
  if (isPhoneAuth) {
    return phone_content;
  }
  return login_email_content;
};
