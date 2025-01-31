import React from "react";
import { useInterval } from "usehooks-ts";
import { View } from "react-native";
import { Container } from "~/components/common";
import { WelcomePager } from "./components/welcome-pager";
import {
  Background,
  WelcomeButtons,
  WelcomeHeader,
  WelcomeIndicators,
} from "./components";
import { SLIDES } from "./constants";

export function WelcomeScreen() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  useInterval(() => {
    if (progress >= 100) {
      setProgress(0);
      setCurrentPage((prev) => (prev === 2 ? 0 : prev + 1));
    } else {
      setProgress((prev) => prev + 1);
    }
  }, 50);

  return (
    <Container removeEdges={["top"]}>
      <Background currentPage={currentPage}>
        <View className="flex-1">
          <WelcomePager currentPage={currentPage} data={SLIDES}>
            <View className="flex flex-col gap-y-4 mt-8">
              <WelcomeIndicators
                progress={progress}
                length={SLIDES.length}
                currentPage={currentPage}
              />
              <WelcomeHeader />
            </View>
          </WelcomePager>
        </View>

        <WelcomeButtons />
      </Background>
    </Container>
  );
}
