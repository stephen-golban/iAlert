export const getOtpSubtitle = (type: string, input: string) => {
  if (type === "phone") {
    const formattedPhone = input.replace(/^(\d{3})(\d{1,2})(\d{3})$/, '$1 $2 $3');
    return `We've sent a verification code to your phone number +373 ${formattedPhone}`;
  }

  return `We've sent a verification code to your email address ${input}`;
};