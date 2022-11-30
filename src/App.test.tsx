import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
describe("App", () => {
  // This should be on a page by page basis
  it('should have a "CART" button', async () => {
    render(<App></App>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(await screen.findByRole("button")).toHaveTextContent("CART");
  });
  it('should have a "Shopping Cart" header', async () => {
    render(<App></App>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
