import { cn } from "~/lib/utils";
import { Edge, Edges, SafeAreaView } from "react-native-safe-area-context";
import { StyleProp, ViewStyle } from "react-native";

interface IContainer extends React.PropsWithChildren {
  className?: string;
  removeEdges?: Edge[];
  style?: StyleProp<ViewStyle>;
}

const EDGES: Edges = ["top", "right", "bottom", "left"];

const Container: React.FC<IContainer> = ({
  children,
  style,
  className,
  removeEdges = ["bottom"],
}) => {
  const edges = EDGES.filter((edge) => !removeEdges?.includes(edge));

  return (
    <SafeAreaView
      style={style}
      edges={edges}
      className={cn("flex-1", className)}
    >
      {children}
    </SafeAreaView>
  );
};

export { Container };
