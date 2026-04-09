import { Header } from "./components/Header/Header";
import { Box } from "@mui/material";
import { UserList } from "./components/UserList/UserList";
import "./App.css";
const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <main>
        <UserList />
      </main>
    </Box>
  );
};

export default App;
