import { WelcomeSlide } from "./types";
import { KeySquare, Bell, MessageSquare } from "lucide-react-native";

export const WELCOME_SLIDES: WelcomeSlide[] = [
  {
    id: "connect",
    title: "READY TO CONNECT WITH CAR OWNERS?",
    icon: KeySquare,
    illustration: require("~/assets/images/connect.jpg"),
  },
  {
    id: "instant",
    title: "INSTANT CAR OWNER COMMUNICATION",
    icon: Bell,
    illustration: require("~/assets/images/connect.jpg"),
  },
  {
    id: "secure",
    title: "24/7 SECURE COMMUNICATION",
    icon: MessageSquare,
    illustration: require("~/assets/images/connect.jpg"),
  },
];
