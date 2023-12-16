import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "../pages/Login";

describe("Login", () => {
  it("user can submit with name and password", async () => {
    render(<Login />);
    screen.getByText("Login Form");

    // arrange
    const nameField = screen.getByLabelText("Username");
    const passwordField = screen.getByLabelText("Password");

    // act
    await fireEvent.change(nameField, {
      target: {
        value: "username",
      },
    });

    await fireEvent.change(passwordField, {
      target: {
        value: "password",
      },
    });

    await fireEvent.click(screen.getByRole("button"));

    // assert
    await waitFor(async () => {
      expect(screen.getByText("success")).toBeInTheDocument();
    });
  });

  it("form validation", async () => {
    render(<Login />);
    screen.getByText("Login Form");

    // arrange
    const nameField = screen.getByLabelText("Username");
    const passwordField = screen.getByLabelText("Password");

    // act
    await fireEvent.change(nameField, {
      target: {
        value: "",
      },
    });

    await fireEvent.change(passwordField, {
      target: {
        value: "",
      },
    });

    await fireEvent.click(screen.getByRole("button"));

    // assert
    await waitFor(async () => {
      expect(screen.getByText("Username is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });

    await fireEvent.change(passwordField, {
      target: {
        value: "test",
      },
    });

    await waitFor(async () => {
      expect(screen.getByText("Password min length 6")).toBeInTheDocument();
    });
  });
});
