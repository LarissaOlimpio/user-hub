import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import type { User } from "../../types/User";
import { alpha } from "@mui/material/styles";
interface UserCardProps {
  user: User;
  onOpenDetails: (user: User) => void;
}

export const UserCard = ({ user, onOpenDetails }: UserCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Card
      className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        border: "1px solid #e2e8f0",
      }}
    >
      <CardContent className="flex grow flex-col items-center text-center">
        <Avatar
          sx={{
            width: 56,
            height: 56,
            mb: 2,
            bgcolor: alpha("#007FFF", 0.1),
            color: "#007FFF",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {getInitials(user.name)}
        </Avatar>

        <Typography
          variant="h6"
          component="h2"
          className="font-bold text-slate-800"
        >
          {user.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" className="mb-4">
          {user.email}
        </Typography>

        <Box sx={{ mt: "auto", pt: 2, width: "100%" }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => onOpenDetails(user)}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Ver Detalhes
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
