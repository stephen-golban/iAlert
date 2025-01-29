import { AuthStackParamList, MainStackParamList } from "./navigation";

declare module "expo-router" {
  interface RouterGroups {
    "(auth)": AuthStackParamList;
    "(main)": MainStackParamList;
  }
}
