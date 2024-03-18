import { useState } from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  // CardMedia,
  Fade,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import type { IProduct } from "../types/product";

interface ProductCardProps {
  product: IProduct;
  handleSelect: (product: IProduct) => void;
}

// const imageBaseUrl: string = "https://notRealEndpoint.dev";

function OverlayCheckmark() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 220,
        height: 200,
        opacity: 0.82,
        animation: "rotateClockwise 0.18s ease-out",
        "@keyframes rotateClockwise": {
          "0%": {
            transform: "rotate(0) scale(0)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
          },
        },
      }}
    >
      <Fade in timeout={256}>
        <Typography
          fontSize={128}
          color="success.main"
          sx={{ textShadow: "1rem 0.2rem 0.8rem #002" }}
        >
          ✓
        </Typography>
      </Fade>
    </Box>
  );
}

function ProductCard({ product, handleSelect }: ProductCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (product: IProduct) => {
    setIsSelected(!isSelected);
    handleSelect(product);
  };

  return (
    <Card
      className="product-card"
      sx={{
        width: 220,
        // minHeight: 260,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          zIndex: 999,
        },
      }}
    >
      <CardActionArea onClick={() => handleClick(product)}>
        {isSelected && <OverlayCheckmark />}
        {/* <CardMedia
          component="img"
          height={20}
          // image={`${imageBaseUrl}${product.image}`}
          alt={`a picture of a ${product.name}`}
        /> */}
        <CardHeader sx={{ p: "1rem 1rem 0rem 1rem" }} title={product.name} />
        <CardContent>
          <Stack gap={4}>
            <Typography variant="body2">{`${product.phone} / ${product.email}`}</Typography>
            <Rating name="product-rating-read-only" value={4} readOnly />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
