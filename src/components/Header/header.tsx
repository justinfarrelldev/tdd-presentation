import { Typography } from "@mui/material";
import React, { FC } from "react";

export const HEADER_TEXT = "Shopping Cart";

export const Header: FC = () => {
  return (
    <>
      <Typography role="heading">{HEADER_TEXT}</Typography>
    </>
  );
};
