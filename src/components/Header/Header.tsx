import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

export default function Header() {
  return (
    <AppBar position="static" color="inherit" elevation={1} sx={{ mb: 4 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <GroupIcon sx={{ display: "flex", mr: 1, color: "primary.main" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            User<span className="text-blue-500">Hub</span>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
