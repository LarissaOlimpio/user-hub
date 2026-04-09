import { render, screen, fireEvent } from "@testing-library/react";
import { UserCard } from "./UserCard";
import { describe, it, expect, vi } from "vitest";

const mockUser = {
  id: 1,
  name: "Leanne Graham",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031",
  company: { name: "Romaguera-Crona" },
  address: { city: "Gwenborough" },
};

describe("UserCard Component", () => {
  it("It should render the user's basic information.", () => {
    render(<UserCard user={mockUser} onOpenDetails={() => {}} />);

    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
  });

  it("It should call the onOpenDetails function when the button is clicked.", () => {
    const onOpenDetailsMock = vi.fn();
    render(<UserCard user={mockUser} onOpenDetails={onOpenDetailsMock} />);

    const button = screen.getByRole("button", { name: /ver detalhes/i });

    fireEvent.click(button);
    expect(onOpenDetailsMock).toHaveBeenCalledTimes(1);
    expect(onOpenDetailsMock).toHaveBeenCalledWith(mockUser);
  });
});
