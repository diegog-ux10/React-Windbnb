import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
  Box,
  Stack,
  SvgIcon,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import PropTypes from "prop-types";

export const CardItem = ({ photo, superHost, type, beds, rating, title }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={photo}
          sx={{ borderRadius: "24px", height: "269px" }}
        />
        <CardContent
          sx={{
            padding: "18px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={1}
          >
            <Box
              component="span"
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {superHost && <Chip label="SUPERHOST" variant="outlined" />}
              {beds ? (
                <Typography>
                  {type} . {beds} beds
                </Typography>
              ) : (
                <Typography>{type}</Typography>
              )}
            </Box>
            <Box
              component="span"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <SvgIcon
                component={StarIcon}
                sx={{ height: "20px" }}
                color="primary"
              />
              <Typography>{rating}</Typography>
            </Box>
          </Stack>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardItem.propTypes = {
  photo: PropTypes.string,
  superHost: PropTypes.bool,
  type: PropTypes.string,
  beds: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
};
