/////----------미사용 


import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
// import Typography from '../components/Typography';

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "30vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-vector-flying-in-the-plane-png-3237235-png-image_1725040.jpg",
    title: "Snorkeling",
    width: "30%",
  },
  {
    url: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-vector-flying-in-the-plane-png-3237235-png-image_1725040.jpg",
    title: "Tour",
    width: "40%",
  },

  {
    url: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-vector-flying-in-the-plane-png-3237235-png-image_1725040.jpg",
    title: "Reading",
    width: "30%",
  },
];

export default function DeparturePlaneCategories() {
  return (
    <Container
      component="section"
      style={{ marginTop: "-30px" }}
      sx={{ mt: 8, mb: 4 }}
    >
      {/* <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography> */}
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
                // marginTop: '-30px'
              }}
            />
            <ImageBackdrop className="imageBackdrop"/>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              {/* <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography> */}
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
