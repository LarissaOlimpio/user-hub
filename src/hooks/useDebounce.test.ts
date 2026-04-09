import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";
import { describe, it, expect, vi } from "vitest";

describe("useDebounce Hook", () => {
  it("It should return the initial value immediately.", () => {
    const { result } = renderHook(() => useDebounce("teste", 300));
    expect(result.current).toBe("teste");
  });

  it("It should update the value only after the specified delay.", () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "inicial", delay: 300 } },
    );

    rerender({ value: "updated", delay: 300 });

    expect(result.current).toBe("inicial");

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("updated");
    vi.useRealTimers();
  });
});
