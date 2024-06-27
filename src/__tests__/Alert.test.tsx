import Alert from "@/components/Alert";
import { render, screen } from "@testing-library/react";

describe("Alert component", () => {

  it("should contains a title and a message", () => {
    const title = "le titre test";
    const message = "le message test";
    render(<Alert title={title} message={message} />);
    const titleElement = screen.getByText(title);
    const messageElement = screen.getByText(message);
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
  it("should  contains error message if message is undefined", () => {
    const title = "le titre test";
    render(<Alert title={title} />);
    const messageElement = screen.getByText(/Une erreur s'est produite/i);
    expect(messageElement).toBeInTheDocument();
  });
});
