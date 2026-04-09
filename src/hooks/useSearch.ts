import { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce";

export function useSearch<T>(data: T[], searchKey: keyof T) {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredData = useMemo(() => {
    if (!debouncedSearchTerm) return data;

    return data.filter((item) => {
      const value = item[searchKey];
      return String(value)
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
    });
  }, [data, debouncedSearchTerm, searchKey]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
}
