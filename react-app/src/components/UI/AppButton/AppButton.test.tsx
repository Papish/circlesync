import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AppButton from "./AppButton";

describe("AppButton", () => {
  it("render", () => {
    render(<AppButton>My Button</AppButton>);
    screen.getByText("My Button");
  });

  it("cannot be clicked on disabled", async () => {
    const spy = vi.spyOn(console, "log");

    render(
      <AppButton onClick={() => console.log()} disabled>
        My Button
      </AppButton>
    );
    const el = screen.getByRole("button");

    fireEvent.click(el);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
