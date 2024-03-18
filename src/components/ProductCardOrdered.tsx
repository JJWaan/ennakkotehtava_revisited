import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import type { IProduct } from "../types/product";

interface Props {
  product: IProduct;
}

const imageBaseUrl: string = "https://bakery-67887d55.digi.loikka.dev";

function ProductCardOrdered({ product }: Props) {
  return (
    <Card
      className="product-card"
      sx={{
        width: 220,
        minHeight: 460,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          zIndex: 999,
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={200}
          image={`${imageBaseUrl}${product.image}`}
          alt={`a picture of a ${product.name}`}
        />
        <CardHeader sx={{ p: "1rem 1rem 0rem 1rem" }} title={product.name} />
        <CardContent>
          <Stack gap={4}>
            <Typography variant="body2">{`${product.amount} / ${product.currency}`}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Rating
              name="product-rating-read-only"
              value={product.rating}
              readOnly
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCardOrdered;
