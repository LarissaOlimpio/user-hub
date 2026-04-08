import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../service/api";
import { Container, CircularProgress, Alert } from "@mui/material";
import Grid from "@mui/material/Grid";
import { UserCard } from "../UserCard/UserCard";
import type { User } from "../../types/User";

export const UserList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

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
    console.log("Abrir detalhes", user);
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
    </Container>
  );
};
