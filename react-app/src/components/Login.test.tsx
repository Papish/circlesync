import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "./Login";

describe("Login", () => {
  it("user can login with name and password", async () => {
    render(<Login />);
    screen.getByText("Login Form");

    // arrange
    const nameField = screen.getByLabelText("Username");
    const passwordField = screen.getByLabelText("Password");

    // act
    await fireEvent.change(nameField, {
      target: {
        value: "test",
      },
    });

    await fireEvent.change(passwordField, {
      target: {
        value: "test",
      },
    });

    await fireEvent.click(screen.getByRole("button"));

    // assert
    await waitFor(async () => {
      expect(screen.getByText("success")).toBeInTheDocument();
    });
  });
});
