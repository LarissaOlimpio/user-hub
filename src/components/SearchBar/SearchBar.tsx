import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const SearchBar = ({ value, onChange, placeholder }: SearchBarProps) => (
  <Box sx={{ mb: 4 }}>
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
      className="bg-white"
    />
  </Box>
);
