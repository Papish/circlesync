import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Test", () => {
    render(<App />);
    screen.getByText("Hello React!");
  });
});
