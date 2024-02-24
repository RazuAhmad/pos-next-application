import { Icon } from '@iconify/react'
import { Button } from '@mui/material'
import React from 'react'

function ShoppingCartHeaderButton({buttonName,iconName}) {
  return (
    <Button
        style={{
          backgroundColor: "hsl(203, 36%, 73%)",
          color: "rgb(45 45 220)",
          fontWeight: "400",
          padding: "3px 16px",
        }}
        variant="contained"
        startIcon={<Icon icon={iconName} />}
      >
        {buttonName}
      </Button>
  )
}

export default ShoppingCartHeaderButton