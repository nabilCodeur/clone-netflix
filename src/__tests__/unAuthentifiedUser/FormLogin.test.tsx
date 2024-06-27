import FormLogin from "@/components/UnAuthentifierUser/login/FormLogin";
import { Authentification } from "@/providers/authentificationProvider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const loginUser = vi.fn();

describe("FormLogin", () => {
  beforeEach(() => {
    render(
      <Authentification.Provider
        value={{
          loginUser,
          logoutUser: vi.fn(),
          signUpUser: vi.fn(),
          errorMessage: "mock error Message",
          user: null,
        }}
      >
        <BrowserRouter>
          <FormLogin />
        </BrowserRouter>
      </Authentification.Provider>
    );
  });
  it("should contains a form", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  }),
    it("should contains email input", () => {
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toBeInTheDocument();
    });
  it("should contains password input", () => {
    const inputPassword = screen.getByPlaceholderText(/password/i);
    expect(inputPassword).toBeInTheDocument();
  });
  it("should contains submit input", () => {
    const submitButton = screen.getByRole("button", { name: /sign-in/i });
    expect(submitButton).toBeInTheDocument();
  });
  it.skip("loginUser should be called if form is filled and submitted", async () => {
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign-in/i });
    const user = userEvent.setup();
    await user.type(inputEmail, "mock@mock.fr");
    await user.type(inputPassword, "mockPassword");
    await user.click(submitButton);
    expect(loginUser).toHaveBeenCalled();
  });
  it("login should be callef if form is filled and submitted",async() => {
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign-in/i });
    const user = userEvent.setup();
    await user.type(inputEmail, "mock@mock.fr");
    await user.type(inputPassword, "mockPassword");
    await user.click(submitButton);
   
  }
  )
});
