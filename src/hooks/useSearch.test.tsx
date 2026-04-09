import { renderHook, act } from "@testing-library/react";
import { useSearch } from "./useSearch";
import { describe, it, expect, vi } from "vitest";

const mockData = [
  { id: 1, name: "Larissa" },
  { id: 2, name: "João" },
];

describe("useSearch Hook", () => {
  it("should filter the data only after the debounce time.", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(mockData, "name"));

    act(() => {
      result.current.setSearchTerm("Lari");
    });

    expect(result.current.filteredData).toHaveLength(2);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.filteredData).toHaveLength(1);
    expect(result.current.filteredData[0].name).toBe("Larissa");

    vi.useRealTimers();
  });
});
