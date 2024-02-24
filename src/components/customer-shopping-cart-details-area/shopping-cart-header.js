"use client";

import { Box, Button, IconButton, Stack } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartHeaderButton from "../common/shopping-cart-header-button";

function ShoppingCartHeader() {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <IconButton aria-label="delete" size="large">
        <MenuOutlinedIcon fontSize="inherit" />
      </IconButton>

      <ShoppingCartHeaderButton
        buttonName="Note"
        iconName="mingcute:edit-line"
      />
      <ShoppingCartHeaderButton
        buttonName="Shipping"
        iconName="material-symbols:local-shipping-outline"
      />
      <ShoppingCartHeaderButton
        buttonName="Hold Orders"
        iconName="mingcute:edit-line"
      />
      <ShoppingCartHeaderButton
        buttonName="New Item"
        iconName="mingcute:edit-line"
      />
    </Stack>
  );
}

export default ShoppingCartHeader;
