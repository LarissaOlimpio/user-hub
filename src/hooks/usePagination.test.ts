import { renderHook, act } from "@testing-library/react";
import { usePagination } from "./usePagination";
import { describe, it, expect } from "vitest";

const mockData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

describe("usePagination Hook", () => {
  it("should calculate the total number of pages correctly.", () => {
    const { result } = renderHook(() => usePagination(mockData, 4));

    expect(result.current.totalPages).toBe(3);
  });

  it("should return the first slice of data (page 1)", () => {
    const { result } = renderHook(() => usePagination(mockData, 4));

    expect(result.current.paginatedData).toHaveLength(4);
    expect(result.current.paginatedData[0].id).toBe(1);
    expect(result.current.paginatedData[3].id).toBe(4);
  });

  it("should change the data when the page is changed", () => {
    const { result } = renderHook(() => usePagination(mockData, 4));

    act(() => {
      result.current.setPage(2);
    });

    expect(result.current.paginatedData[0].id).toBe(5);
    expect(result.current.paginatedData).toHaveLength(4);
    expect(result.current.page).toBe(2);
  });

  it("should return the last page with the remaining items", () => {
    const { result } = renderHook(() => usePagination(mockData, 4));

    act(() => {
      result.current.setPage(3);
    });
    expect(result.current.paginatedData).toHaveLength(2);
    expect(result.current.paginatedData[0].id).toBe(9);
  });
});
