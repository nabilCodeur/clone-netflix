import FallbackComponent from "@/components/FallbackComponent";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";

describe("Fallback component all mode", () => {
  const resetErrorBoundaryMock = vi.fn().mockReturnValue(null);
  const error = new Error("test error");
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FallbackComponent
          error={error}
          resetErrorBoundary={resetErrorBoundaryMock}
        />
      </BrowserRouter>
    );
  });
  it("should contains 'Retour à l'accueil'", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("resetErrorBoundary should be called if button is clicked", async () => {
    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);
    expect(resetErrorBoundaryMock).toHaveBeenCalledOnce();
  });
  it("link should redirects to home", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});

describe("fallback component mode DEV true", () => {
  const resetErrorBoundaryMock = vi.fn().mockReturnValue(null);
  const error = new Error("test error");
  beforeEach(() => {
    vi.stubEnv("DEV", true);
    render(
      <BrowserRouter>
        <FallbackComponent
          error={error}
          resetErrorBoundary={resetErrorBoundaryMock}
        />
      </BrowserRouter>
    );
  });
  it("should display error.message if import.meta.env.DEV is true", () => {
    const errorElement = screen.getByText(error.message);
    expect(import.meta.env.DEV).toBe(true);
    expect(errorElement).toBeInTheDocument();

  });
});

describe("fallback component mode DEV false", () => {
  const resetErrorBoundaryMock = vi.fn().mockReturnValue(null);
  const error = new Error("test error");
  beforeEach(() => {
    vi.stubEnv("DEV", false);
    render(
      <BrowserRouter>
        <FallbackComponent
          error={error}
          resetErrorBoundary={resetErrorBoundaryMock}
        />
      </BrowserRouter>
    );
  });
  test("should display nothing if import.meta.env.DEV is false", () => {
    const messageElement = screen.queryByText(/Erreur inconnue/i);
    const errorElement = screen.queryByText(error.message);
    expect(errorElement).not.toBeInTheDocument();
    expect(messageElement).not.toBeInTheDocument();

  });
});
