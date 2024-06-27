import Banner from "@/components/UnAuthentifierUser/banner/HomeBanner";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Hommer banner component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>
    );
  });

  it("first link should contains an image", () => {
    const link = screen.queryAllByRole("link")[0];
    const img = link.querySelector("img") as HTMLImageElement;
    expect(img).toBeInTheDocument();
  });
  it("second link should contains 'Inscription'", () => {
    const link = screen.queryAllByRole("link")[1];
    expect(link).toHaveTextContent("Inscription");
  });
  it("second link should redirect to Inscription page", () => {
    const link = screen.queryAllByRole("link")[1];
    expect(link).toHaveAttribute("href", "/sign-up");
  });
});
