import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./../components/SearchBar/SearchBar";

describe("SearchBar Component", () => {
  it("The onChange function should be called with the correct value when typing.", () => {
    const handleChange = vi.fn();

    render(<SearchBar value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Larissa" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("Larissa");
  });
});
