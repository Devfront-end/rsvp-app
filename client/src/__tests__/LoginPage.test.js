import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../components/LoginPage";

test("renders login form", () => {
  render(<LoginPage />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", { name: /login/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test("handles user input", () => {
  render(<LoginPage />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });

  expect(emailInput.value).toBe("test@example.com");
  expect(passwordInput.value).toBe("password");
});
