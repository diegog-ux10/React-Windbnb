import { Box, Container, Grid, Stack } from "@mui/material";
import { Nav } from "./components";
import { CardItem } from "./components/card-item/CardItem";

import { useStays } from "./hooks/useStays";
import { Modal } from "./components/modal/Modal";
import { useState } from "react";

export const App = () => {
  const { setFilters, stays, filters } = useStays();
  const [open, setOpen] = useState(false);

  const handleCityChange = (newCity) => {
    setFilters((prevState) => ({
      ...prevState,
      city: newCity,
    }));
  };

  const handleGuestsChange = (newGuests) => {
    setFilters((prevState) => ({
      ...prevState,
      guests: Number(newGuests),
    }));
  };
  return (
    <>
      <Container maxWidth="xl">
        <Stack>
          <Box>
            <Nav
              cityValue={filters.city}
              guestsValue={filters.maxGuests}
              onCityChange={handleCityChange}
              onGuestsChange={handleGuestsChange}
              setModalOpen={setOpen}
            />
          </Box>
          <Grid container spacing={4} marginTop={4}>
            {stays.map((ele, i) => (
              <Grid key={i} item xs={4} elevation={0}>
                <CardItem {...ele} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};
