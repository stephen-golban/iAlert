import React from "react";
import { View } from "react-native";

import { Button } from "~/components/ui";
import { EmptyState } from "../empty-state";
import { Feather } from "@expo/vector-icons";

interface Props {
  onLayout: () => void;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by boundary:", error);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <EmptyState
          icon={<Feather name="alert-triangle" size={64} color="#EF4444" />}
          title="Something went wrong"
          description={this.state.error?.message}
          action={
            <Button variant="destructive" size="lg" onPress={this.resetError}>
              Try Again
            </Button>
          }
        />
      );
    }

    return (
      <View className="flex-1" onLayout={this.props.onLayout}>
        {this.props.children}
      </View>
    );
  }
}
