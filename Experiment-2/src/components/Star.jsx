import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Star() {
  return (
    <Stack spacing={5}>
      <Rating name="half-rating" defaultValue={1} precision={1} />
      
    </Stack>
  );
}
