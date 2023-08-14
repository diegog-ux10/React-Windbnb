import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Modal = ({
  open,
  setOpen,
  onCityChange,
  onGuestsChange,
  cityValue,
  guestsValue,
}) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputCityChange = (e) => {
    const term = e.currentTarget.value;
    onCityChange(term);
  };

  const handleInputGuestChange = (e) => {
    const term = e.currentTarget.value;
    onGuestsChange(term);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            boxShadow: "0px 0px 12px 0px rgba(163,163,163,1)",
            borderRadius: "12px",
          }}
          elevation={0}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              padding: "8px 0",
              borderRight: "1px solid #F2F2F2",
            }}
            placeholder="City"
            inputProps={{ "aria-label": "search by city" }}
            onChange={handleInputCityChange}
            value={cityValue}
          />
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              borderRight: "1px solid #F2F2F2",
              padding: "8px 0",
            }}
            placeholder="Guests"
            inputProps={{ "aria-label": "search by guests" }}
            onChange={handleInputGuestChange}
            value={guestsValue}
          />
          <Button variant="contained" startIcon={<SearchIcon />}>
            Delete
          </Button>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};
