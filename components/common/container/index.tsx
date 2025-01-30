import { cn } from "~/lib/utils";
import { SafeAreaView } from "react-native-safe-area-context";

interface IContainer extends React.PropsWithChildren {
  className?: string;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return (
    <SafeAreaView className={cn("flex-1", className)}>{children}</SafeAreaView>
  );
};

export { Container };
