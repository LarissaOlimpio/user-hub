import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../service/api";
import { Container, CircularProgress, Alert } from "@mui/material";
import Grid from "@mui/material/Grid";
import { UserCard } from "../UserCard/UserCard";
import { UserDetailsModal } from "../UserDetailsModal/UserDetailsModal";
import type { User } from "../../types/User";
import { useState } from "react";

export const UserList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isLoading) {
    return (
      <Container className="flex justify-center p-10">
        <CircularProgress />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Alert severity="error">Não foi possível carregar os usuários.</Alert>
      </Container>
    );
  }
  const handleOpenDetails = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data?.map((user) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
            <UserCard user={user} onOpenDetails={handleOpenDetails} />
          </Grid>
        ))}
      </Grid>
      <UserDetailsModal
        user={selectedUser}
        open={isModalOpen}
        onClose={handleCloseDetails}
      />
    </Container>
  );
};
