import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renders title correctly", () => {
    render(<Header title="Dashboard" />);

    expect(
      screen.getByRole("heading", { name: /dashboard/i }),
    ).toBeInTheDocument();
  });

  test("shows welcome message when username exists", () => {
    render(<Header title="Dashboard" username="Alice" />);

    expect(screen.getByText(/welcome, alice/i)).toBeInTheDocument();
  });

  test("does not show welcome message when username missing", () => {
    render(<Header title="Dashboard" />);

    expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
  });
});
