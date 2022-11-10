import React from "react";
import { render, screen } from "@testing-library/react-native";
import { DetailsSectionComponent } from "../src/components/DetailsSectionComponent";

test("Displays all sections correctly", () => {
  const title = "title";
  const value = "value";

  render(<DetailsSectionComponent title={title} value={value} />);

  expect(screen.getByAccessibilityHint("details section title")).toBeTruthy();
  expect(screen.getByAccessibilityHint("details section value")).toBeTruthy();
});
