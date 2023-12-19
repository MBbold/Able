"use client";

import AddIcon from '@mui/icons-material/Add';
import { Popover, Typography } from '@mui/material';
import { useState } from "react";
const AddButtonComp = ({value}:any) =>{
    const [anchorEl, setAnchorEl] = useState(null)
    const handlePopoverOpen = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
return(
    <>
        <AddIcon aria-haspopup="true"  onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} sx={{color:"#fff", p:0.2, width:25, height:20, backgroundColor:"#b9c0c5", borderRadius:2, ":hover":{width:30, cursor:"pointer"}}}/>
        <Popover
                                    sx={{
                                    pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                    vertical: -5,
                                    horizontal: 35,
                                    }}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Typography sx={{ p: 0.7, fontSize:12, backgroundColor:"black", color:"#fff" }}>{value}</Typography>
                                </Popover>
    
    
    </>
)
}
export default AddButtonComp;