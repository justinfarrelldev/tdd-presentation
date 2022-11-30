import { Button } from "@mui/material";
import React, { FC } from "react";

interface Props {
  text?: string;
}

export const CartButton: FC<Props> = (props: Props) => {
  return (
    <>
      <Button role="button">{props.text}</Button>
    </>
  );
};
