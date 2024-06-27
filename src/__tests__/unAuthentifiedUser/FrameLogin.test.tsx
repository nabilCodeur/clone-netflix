import FrameLogin from "@/components/UnAuthentifierUser/login/FrameLogin";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("FrameLogin", () => {
  beforeEach(() => {
    vi.mock("@/components/UnAuthentifierUser/login/FormLogin", () => ({
      default: () => <div>hello world</div>,
    }));
    render(
      <BrowserRouter>
        <FrameLogin />
      </BrowserRouter>
    );
  });
  it('h1 should be "Sign in"', () => {
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent(/sign-in/i);
  });
  it("should constains link to Sign-up now", () => {
    const link = screen.getByRole("link", { name: /Sign-up now/i });
    expect(link).toHaveAttribute("href", "/sign-up");
  });
});
