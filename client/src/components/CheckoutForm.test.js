import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const formHeader = screen.getByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const formSubmit = screen.getByText('Checkout');
    fireEvent.click(formSubmit);
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});
