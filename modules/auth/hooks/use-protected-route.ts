import { useEffect } from "react";
import { router, useSegments } from "expo-router";

export function useProtectedRoute() {
  const segments = useSegments();
  const isAuthenticated = false; // This should come from your auth state management

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    const inMainGroup = segments[0] === "(main)";

    if (!isAuthenticated && inMainGroup) {
      // Redirect to auth flow if accessing protected pages while not authenticated
      router.replace("/welcome");
    } else if (isAuthenticated && inAuthGroup) {
      // Redirect to main flow if accessing auth pages while authenticated
      router.replace("/");
    }
  }, [isAuthenticated, segments]);
}
