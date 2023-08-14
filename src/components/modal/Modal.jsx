import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Paper,
  InputBase,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Modal = ({
  open,
  setOpen,
  onCityChange,
  onGuestsChange,
  cityValue,
  guestsValue,
  cities,
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleInputCityChange = (e) => {
    const term = e.target.value;
    onCityChange(term);
  };

  const handleInputGuestChange = (e) => {
    const term = e.currentTarget.value;
    onGuestsChange(term);
  };

  const dataCitiesArr = new Set(cities);
  let newCitiesResult = [...dataCitiesArr];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cityValue}
            label="City"
            onChange={handleInputCityChange}
          >
            {newCitiesResult.map((city, i) => (
              <MenuItem value={city} key={i}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
          Search
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};
