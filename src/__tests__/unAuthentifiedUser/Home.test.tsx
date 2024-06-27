import Home from "@/components/UnAuthentifierUser/Home";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Unauthentified User Home Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  it("should contains a header", () => {
    const header = screen.queryByRole("banner");
    expect(header).toBeInTheDocument();
  });
  it('should constains h1 with "Unlimited movies, TV shows, and more"', () => {
    const title = screen.queryByRole("heading", { level: 1 });
    expect(title).toHaveTextContent(/Unlimited movies, TV shows, and more/);
  });
  it('should constains h2 with "Unlimited movies, TV shows, and more"', () => {
    const title = screen.queryByRole("heading", { level: 2 });
    expect(title).toHaveTextContent(/Watch anywhere. Cancel anytime./);
  });
  it('should contains a link "Inscription" button redirecting to home', () => {
    const link = screen.queryByRole("link", { name: /Get Started/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/login");
  });
  it("shoulf contains a beckgroundImage style", () => {
    const containerHome = screen.queryByTestId("unauthentified-home")!;
    const style = window.getComputedStyle(containerHome);
    expect(style.backgroundImage).not.toBe("undefined");
  });
  it("shoulf contains a beckgroundImage style in blend mode", () => {
    const containerHome = screen.queryByTestId("unauthentified-home")!;
    const style = window.getComputedStyle(containerHome);
    expect(style.backgroundBlendMode).toBe("multiply");
  });
});
