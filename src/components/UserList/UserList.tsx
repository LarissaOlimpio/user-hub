import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Alert, Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";

import { fetchUsers } from "../../service/api";
import { UserCard } from "../UserCard/UserCard";
import { UserDetailsModal } from "../UserDetailsModal/UserDetailsModal";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardGridSkeleton } from "../CardGridSkeleton/CardGridSkeleton";

import { useSearch } from "../../hooks/useSearch";
import { usePagination } from "../../hooks/usePagination";
import type { User } from "../../types/User";

export const UserList = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [urlUserId, setUrlUserId] = useState<string | null>(
    new URLSearchParams(window.location.search).get("user"),
  );

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const { searchTerm, setSearchTerm, filteredData } = useSearch(
    users || [],
    "name",
  );

  const { page, setPage, totalPages, paginatedData } = usePagination(
    filteredData,
    6,
  );

  const activeUser = useMemo(() => {
    if (selectedUser) return selectedUser;
    if (urlUserId && users) {
      return users.find((u) => u.id === Number(urlUserId)) || null;
    }
    return null;
  }, [selectedUser, urlUserId, users]);

  const handleOpenDetails = (user: User) => {
    setSelectedUser(user);
    setUrlUserId(String(user.id));
    const newUrl = `${window.location.pathname}?user=${user.id}`;
    window.history.pushState({}, "", newUrl);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
    setUrlUserId(null);
    window.history.pushState({}, "", window.location.pathname);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  if (isLoading) return <CardGridSkeleton quantity={6} showSearch={true} />;

  if (isError) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error">Não foi possível carregar os usuários.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SearchBar
        value={searchTerm}
        placeholder="Buscar usuários pelo nome..."
        onChange={handleSearchChange}
      />

      <Grid container spacing={3}>
        {paginatedData.map((user) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
            <UserCard user={user} onOpenDetails={handleOpenDetails} />
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}

      <UserDetailsModal
        open={!!activeUser}
        user={activeUser}
        onClose={handleCloseDetails}
      />
    </Container>
  );
};
