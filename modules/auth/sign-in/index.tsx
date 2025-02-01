import React from "react";

import { LayoutWrapper, PhoneAuthForm } from "../components";

export function SignInScreen() {
  const onSubmit = async (data: any) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call delay
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LayoutWrapper>
      <PhoneAuthForm onSubmit={onSubmit} />
    </LayoutWrapper>
  );
}
