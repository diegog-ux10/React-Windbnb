import {
  Dialog,
  DialogContent,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Tabs,
  Typography,
  Tab,
  DialogActions,
  Stack,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import PropTypes from "prop-types";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Modal = ({
  open,
  setOpen,
  onCityChange,
  onGuestsChange,
  cityValue,
  cities,
}) => {
  const [adultsValue, setAdultsValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  const handleSearch = () => {
    onGuestsChange(adultsValue + childrenValue);
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleInputCityChange = (e) => {
    const term = e.target.value;
    onCityChange(term);
  };

  const dataCitiesArr = new Set(cities);
  let newCitiesResult = [...dataCitiesArr];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogContent>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Location" {...a11yProps(0)} />
            <Tab label="Guests" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              label="City"
              value={cityValue}
              onChange={handleInputCityChange}
            >
              {newCitiesResult.map((city, i) => (
                <MenuItem value={city} key={i}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <FormControl fullWidth>
            <Typography sx={{ fontWeight: "bold" }}>Adults</Typography>
            <Typography sx={{ color: "gray", opacity: "0.5" }}>
              Ages 13 or Above
            </Typography>
            <Stack flexDirection="row" gap={2}>
              <IconButton
                variant="contained"
                onClick={() => setAdultsValue((adultsValue) => adultsValue - 1)}
                color="primary"
              >
                -
              </IconButton>
              <Typography variant="body1" sx={{ margin: "auto 0" }}>
                {adultsValue}
              </Typography>
              <IconButton
                variant="contained"
                color="primary"
                onClick={() => setAdultsValue((adultsValue) => adultsValue + 1)}
              >
                +
              </IconButton>
            </Stack>
            <Typography sx={{ fontWeight: "bold" }}>Children</Typography>
            <Typography sx={{ color: "gray", opacity: "0.5" }}>
              Ages 2-12
            </Typography>
            <Stack flexDirection="row" gap={2}>
              <IconButton
                variant="contained"
                onClick={() =>
                  setChildrenValue((childrenValue) => childrenValue - 1)
                }
                color="primary"
              >
                -
              </IconButton>
              <Typography variant="body1" sx={{ margin: "auto 0" }}>
                {childrenValue}
              </Typography>
              <IconButton
                variant="contained"
                onClick={() =>
                  setChildrenValue((childrenValue) => childrenValue + 1)
                }
                color="primary"
              >
                +
              </IconButton>
            </Stack>
          </FormControl>
        </CustomTabPanel>
        <DialogActions>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Search
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  onCityChange: PropTypes.func,
  onGuestsChange: PropTypes.func,
  cityValue: PropTypes.string,
  guestsValue: PropTypes.string,
  cities: PropTypes.array,
};
