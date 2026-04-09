import { useState, useMemo } from "react";

export function useSearch<T>(data: T[], searchKey: keyof T) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const value = item[searchKey];
      return String(value).toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm, searchKey]);

  return { searchTerm, setSearchTerm, filteredData };
}
