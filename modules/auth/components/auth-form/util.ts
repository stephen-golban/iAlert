import { Href } from "expo-router";

const base_content = {
  title: "Welcome back",
  button_text: "Continue",
};

const phone_content = {
  ...base_content,
  question: "Lost access to my phone number",
  subtitle: "Enter the phone number associated with your iAlert account",
};

const register_phone_content = {
  ...base_content,
  title: "Let's get started!",
  question: "Already have an account? Log in",
  subtitle:
    "Enter your phone number. We will send you a confirmation code there",
};

const login_email_content = {
  ...base_content,
  question: "Lost access to my email address",
  subtitle: "Enter the email address associated with your iAlert account",
};

const forgot_password_phone_content = {
  title: "Enter phone number",
  subtitle:
    "Make sure it's the number you use with the iAlert account you lost access to",
};

const getAppropriateContent = (segments: string[]) => {
  const route = segments.join("/");
  const isSignIn = route === "(auth)/sign-in";
  const isSignUp = route.includes("(auth)/sign-up");
};
