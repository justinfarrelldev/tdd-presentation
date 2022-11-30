import { render, screen } from "@testing-library/react";
import React from "react";
import { Header, HEADER_TEXT } from "./header";

describe("components", () => {
  describe("Header", () => {
    it('should display with the text "Shopping Cart"', async () => {
      render(<Header></Header>);

      expect(screen.getByRole("heading")).toBeInTheDocument();
      expect(await screen.findByText("Shopping Cart")).toBeInTheDocument();
    });
  });
});
