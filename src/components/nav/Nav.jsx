import { AppBar, Box, IconButton, Paper, Toolbar } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

import image from "../../assets/img/logo.png";

export const Nav = ({
  onCityChange,
  onGuestsChange,
  cityValue,
  guestsValue,
  setModalOpen,
}) => {
  const handleInputCityChange = (e) => {
    const term = e.currentTarget.value;
    onCityChange(term);
  };

  const handleInputGuestChange = (e) => {
    const term = e.currentTarget.value;
    onGuestsChange(term);
  };

  const handleSearchClick = () => {
    setModalOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "12px 0px !important",
          }}
        >
          <img src={image} alt="" />
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
            <IconButton
              type="button"
              sx={{ p: "12px 14px" }}
              aria-label="search"
              onClick={handleSearchClick}
            >
              <SearchIcon color="primary" />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Nav.propTypes = {
  onCityChange: PropTypes.func,
  onGuestsChange: PropTypes.func,
  cityValue: PropTypes.string,
  guestsValue: PropTypes.string,
  setModalOpen: PropTypes.func,
};
