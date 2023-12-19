"use client";
import { Avatar, Popover, Typography } from "@mui/material";
import { useState } from "react";

const AvatarComp = ({width, height, name, path}:any)=>{
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
        <Avatar sx={{width:width, height:height, border:"1px solid #a7a9aa", ":hover":{cursor:"pointer"} }} src={path} alt="userIcon" aria-haspopup="true"  onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}/>
        <Popover
            sx={{
            pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: width+5,
            horizontal: width-60,
            }}
            // transformOrigin={{
            // vertical: 'top',
            // horizontal: 'left',
            // }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            >
            <Typography sx={{ p: 0.7, fontSize:12, backgroundColor:"black", color:"#fff" }}>{name}</Typography>
            </Popover>
        </>
    )
}
export default AvatarComp;