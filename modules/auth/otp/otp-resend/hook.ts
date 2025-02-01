import { useCallback, useState } from "react";

interface UseOtpResendResult {
  resending: boolean;
  resendStatus: "idle" | "success" | "error";
  resendCooldown: number;
  handleResend: () => Promise<void>;
}

export function useOtpResend(): UseOtpResendResult {
  const [resending, setResending] = useState(false);
  const [resendStatus, setResendStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleResend = useCallback(async () => {
    try {
      setResending(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success (70% chance)
      if (Math.random() > 0.3) {
        setResendStatus("success");
        setResendCooldown(2); // Start 30 second cooldown
        const timer = setInterval(() => {
          setResendCooldown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setResendStatus("idle");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        throw new Error("Failed to resend code");
      }
    } catch (error) {
      setResendStatus("error");
      setTimeout(() => setResendStatus("idle"), 3000);
    } finally {
      setResending(false);
    }
  }, []);

  return {
    resending,
    resendStatus,
    resendCooldown,
    handleResend,
  };
}
