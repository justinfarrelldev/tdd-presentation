import { render, screen } from "@testing-library/react";
import { CartButton } from "./cartButton";

describe("components", () => {
  describe("CartButton", () => {
    it("should render the text passed in the text prop", () => {
      render(<CartButton text="Test"></CartButton>);
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });
});
