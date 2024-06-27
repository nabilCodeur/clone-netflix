import LoginBanner from "@/components/UnAuthentifierUser/banner/LoginBanner";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Loginbanner component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginBanner />
      </BrowserRouter>
    );
  });
  it("should contains a header", () => {
    const header = screen.queryByRole("banner");
    expect(header).toBeInTheDocument();
  });
  it("link should contains an img", () => {
    const link = screen.getByRole("link");
    const img = link.querySelector("img");
    expect(img).toBeInTheDocument();
  });
  it("link should redirects to home", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
