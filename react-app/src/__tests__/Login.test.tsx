import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "../pages/Login";
import user from "@testing-library/user-event";

describe("Login", () => {
  const mount = () => {
    render(<Login />);

    // selectors
    const usernameEl = screen.getByLabelText("Username");
    const passwordEl = screen.getByLabelText("Password");
    const loginBtnEl = screen.getByRole("button");

    return { usernameEl, passwordEl, loginBtnEl };
  };

  it("user can submit", async () => {
    const { usernameEl, passwordEl, loginBtnEl } = mount();

    await user.type(usernameEl, "test");
    await user.type(passwordEl, "password");

    await user.click(loginBtnEl);

    expect(screen.getByText("success")).toBeInTheDocument();
  });

  it("form validation", async () => {
    const { loginBtnEl } = mount();

    await user.click(loginBtnEl);

    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("password min length", async () => {
    const { passwordEl, loginBtnEl } = mount();

    await user.type(passwordEl, "pass");
    await user.click(loginBtnEl);

    expect(screen.getByText("Password min length 6")).toBeInTheDocument();
  });
});
