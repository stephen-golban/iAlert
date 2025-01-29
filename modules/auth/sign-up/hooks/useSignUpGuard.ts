import { useEffect } from "react";
import { router, usePathname, useLocalSearchParams } from "expo-router";

const SIGN_UP_ROUTES = [
  "sign-up/phone-number",
  "sign-up/otp",
  "sign-up/user-info",
  "sign-up/car-info",
] as const;

export function useSignUpGuard() {
  const pathname = usePathname();
  const params = useLocalSearchParams();

  useEffect(() => {
    const currentRouteIndex = SIGN_UP_ROUTES.findIndex((route) =>
      pathname.endsWith(route)
    );

    if (currentRouteIndex === -1) return;

    // Allow first step without params
    if (currentRouteIndex === 0) return;

    // Check required params for each step
    switch (pathname) {
      case "(auth)/sign-up/otp":
        if (!params.phoneNumber) {
          router.replace("sign-up/phone-number");
        }
        break;

      case "(auth)/sign-up/user-info":
        if (!params.phoneNumber || !params.otp) {
          router.replace("sign-up/phone-number");
        }
        break;

      case "(auth)/sign-up/car-info":
        if (!params.phoneNumber || !params.otp || !params.userInfo) {
          router.replace("sign-up/phone-number");
        }
        break;
    }
  }, [pathname, params]);
}
