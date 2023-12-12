'use client'
import { Box, Fade, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/base";
const SearchButton = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [button, setButton] = useState("null");
    const [selectedMenu, setSelectedMenu] = useState("");

    const handleClick = (event: any) => {
        console.log("Search");
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Box sx={{ px: 1, borderRadius: 1, alignItems: 'center', justifyContent: "center", display: 'flex' }} aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleClick}
                onMouseLeave={handleClick}
                className={selectedMenu ? "bg-[#FC5962] text-[#FFFF] items-between hover:bg-[#FD3137] hover:text-white gap-1" : "bg-[#D5D9E1] text-[#8F959D] items-between hover:bg-[#838c97]  hover:text-white"}
            >
                <SearchIcon fontSize='small' sx={{ fontWeight: 600 }} />
                {selectedMenu ? <Typography sx={{fontSize:12, fontWeight:600}}>{selectedMenu}</Typography> : ""}
                <KeyboardArrowDownIcon fontSize="small" />
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <MenuList>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Олон нийт") }}>Олон нийт</MenuItem>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Цаг бүртгэл") }}>Цаг бүртгэл</MenuItem>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Ирсэн бичиг") }}>Ирсэн бичиг</MenuItem>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Өргөдөл гомдол") }}>Өргөдөл гомдол</MenuItem>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Тушаал, шийдвэр") }}>Тушаал шийдвэр</MenuItem>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Хурал") }}>Хурал</MenuItem>
                                    <MenuItem sx={{ fontSize: 12, mx: 1 }} onClick={(event) => { setSelectedMenu("Захидал") }}>Захидал</MenuItem>
                                </MenuList>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </Box>
            {selectedMenu ? <Button className={selectedMenu ? "px-2 bg-[#FC5962] text-[#FFFF] items-between hover:bg-[#FD3137] hover:text-white rounded" : "px-2 bg-[#D5D9E1] text-[#8F959D] items-between hover:bg-[#838c97] hover:text-white rounded"} onClick={() => setSelectedMenu("")}><CloseIcon /></Button> : ""}
        </Box>
    )
}
export default SearchButton;