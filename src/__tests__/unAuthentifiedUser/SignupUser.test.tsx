import SignUpBanner from "@/components/UnAuthentifierUser/banner/SignUpBanner";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Loginbanner component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SignUpBanner />
      </BrowserRouter>
    );
  });
  it("should contains a header", () => {
    const header = screen.queryByRole("banner");
    expect(header).toBeInTheDocument();
  });
  it("first link should contains an img", () => {
    const link = screen.getAllByRole("link")[0];
    const img = link.querySelector("img");
    expect(img).toBeInTheDocument();
  });
  it("first link should redirects to home", () => {
    const link = screen.getAllByRole("link")[0];

    expect(link).toHaveAttribute("href", "/");
  });
  it("second link should contains 'Sign in'", () => {
    const link = screen.getAllByRole("link")[1];
    expect(link).toHaveTextContent(/Sign in/i);
  });
  it("second link should redirects to login page", () => {
    const link = screen.getAllByRole("link")[1];

    expect(link).toHaveAttribute("href", "/login");
  });
});
