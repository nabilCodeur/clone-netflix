import PageNotFound from "@/components/PageNotFound";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("PageNotFound component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );
  });
  it('should contains h1 with "Vous êtes perdu?"', () => {
    
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent(/Vous êtes perdu ?/i);
  });
  it("should constains a button 'Retour à l'accueil'",() => {
    const button = screen.queryByRole("button")
    expect(button).toHaveTextContent(/Retour à l'accueil/i)
  }
  )
  it("link should redirects to home",() => {
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href","/")
  }
  )
});
