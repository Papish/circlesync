import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "../pages/Login";
import user from "@testing-library/user-event";

describe("Login", () => {
  const mount = () => {
    render(<Login />);

    const emailEl = screen.getByLabelText("Email");
    const passwordEl = screen.getByLabelText("Password");
    const loginBtnEl = screen.getByRole("button");

    return { emailEl, passwordEl, loginBtnEl };
  };

  it("user can submit", async () => {
    const { emailEl, passwordEl, loginBtnEl } = mount();

    await user.type(emailEl, "test@test.com");
    await user.type(passwordEl, "password");

    await user.click(loginBtnEl);

    expect(screen.getByText("success")).toBeInTheDocument();
  });

  it("email and password are required", async () => {
    const { loginBtnEl } = mount();

    await user.click(loginBtnEl);

    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("password min length should be 6", async () => {
    const { passwordEl, loginBtnEl } = mount();

    await user.type(passwordEl, "pass");
    await user.click(loginBtnEl);

    expect(screen.getByText("Password min length 6")).toBeInTheDocument();
  });
});
