import { render, screen, fireEvent } from "@testing-library/react";
import { UserDetailsModal } from "./UserDetailsModal";
import { describe, it, expect, vi } from "vitest";

const mockUser = {
  id: 1,
  name: "Ana Oliveira",
  email: "ana@teste.com",
  phone: "123456789",
  company: { name: "Tech Solutions" },
  address: { city: "São Paulo" },
};

describe("UserDetailsModal Component", () => {
  it('It should not render anything when "open" is false', () => {
    const { queryByText } = render(
      <UserDetailsModal user={mockUser} open={false} onClose={() => {}} />,
    );

    expect(queryByText("Ana Oliveira")).toBeNull();
  });

  it("It should display all the user's information when the modal is open", () => {
    render(<UserDetailsModal user={mockUser} open={true} onClose={() => {}} />);

    expect(screen.getByText("Ana Oliveira")).toBeInTheDocument();
    expect(screen.getByText(/ana@teste.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Tech Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/São Paulo/i)).toBeInTheDocument();
  });

  it("It should call the onClose function when the close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <UserDetailsModal user={mockUser} open={true} onClose={handleClose} />,
    );

    const closeButton = screen.getByRole("button", { name: /fechar/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
