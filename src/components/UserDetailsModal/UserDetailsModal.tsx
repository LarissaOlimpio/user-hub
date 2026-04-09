import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { SvgIconComponent } from "@mui/icons-material";
import type { User } from "../../types/User";

interface UserDetailsModalProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
}
interface InfoItemProps {
  icon: SvgIconComponent;
  label: string;
  value: string;
}

const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => (
  <Stack direction="row" spacing={2}>
    <Icon color="action" fontSize="small" />
    <Typography variant="body1">
      <span className="font-semibold text-slate-700">{label}:</span> {value}
    </Typography>
  </Stack>
);

export const UserDetailsModal = ({
  user,
  open,
  onClose,
}: UserDetailsModalProps) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {user.name}
        <IconButton onClick={onClose} sx={{ color: "grey.500" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Stack spacing={3} sx={{ py: 1 }}>
          <InfoItem icon={EmailIcon} label="Email" value={user.email} />
          <InfoItem icon={PhoneIcon} label="Telefone" value={user.phone} />
          <InfoItem
            icon={BusinessIcon}
            label="Empresa"
            value={user.company.name}
          />
          <InfoItem
            icon={LocationOnIcon}
            label="Cidade"
            value={user.address.city}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          disableElevation
          className="bg-blue-600 px-6 py-2 font-bold normal-case hover:bg-blue-700"
        >
          FECHAR
        </Button>
      </DialogActions>
    </Dialog>
  );
};
