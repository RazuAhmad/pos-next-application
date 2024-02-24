'use client'

import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
import { Icon } from '@iconify/react';

function ProductSearchBar() {
  return (
    <div className='flex items-center justify-between px-6 sticky top-0 z-10 shadow-md py-1'>
      
       <Box sx={{ display: 'flex', alignItems: 'flex-end',
        '& .css-1eed5fa-MuiInputBase-root-MuiInput-root:before':{
          borderBottom:'none',
        }
      }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5,cursor:"pointer" }} />
     
        <TextField id="input-with-sx" label="Search Products..." variant="standard" />
      </Box>
      <Icon icon="mdi:barcode-scanner" width='2em' className='cursor-pointer' />
    </div>
  )
}

export default ProductSearchBar