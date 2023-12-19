"use client"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, Button, Divider, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import './textArea.css'
const AlertButtonComp = ()=>{
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(prev => !prev);
    return(
        <>
            <button className="tooltip" onClick={handleClick}>
                <NotificationsIcon sx={{color:"#b9c0c5", p:0.2,  ":hover":{color:"#4e4f50"}}}/>
                <Typography className="tooltipText">Санамж үүсгэх</Typography>
            </button>
            <Modal open={open} onClose={handleClick}>
                <Box sx={{width:500, height:800, border:"1 solid #333", borderRadius:1, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#fff", m:"auto", mt:5,flexDirection:"column", gap:2}}>
                    <Box sx={{display:"flex"}}>
                        <Typography sx={{fontSize:18, fontWeight:600}}>Өргөдөл гомдлоос санамж үүсгэх</Typography>
                    </Box>
                    <Box sx={{width:"100%", height:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <textarea className="textinput">Танд Цахилгаан дамжуулах үндэсний сүлжээ-с ирсэн "А2- Улаанбаатар салбар Ж.Анхбаатар, Х.Цогтпүрэв энэ 2 хүн моментс апп-с цагаа бүртгүүлэх гэхээр энэ  ..." агуулга бүхий өргөдөл гомдлыг сануулж байна!</textarea>
                    </Box>
                    <Box sx={{width:"70%"}}>
                        <Divider textAlign="left" sx={{":before":{borderWidth:1}, ":after":{borderWidth:1}}}><Typography sx={{fontSize:12, fontWeight:600, color:"#777"}}>Хүлээн авах хэрэглэгчид</Typography></Divider>
                    </Box>
                    <Box>
                        <Button>dsfsdf</Button>
                    </Box>
                    <Box sx={{width:"70%"}}>
                        <Divider textAlign="left" sx={{":before":{borderWidth:1}, ":after":{borderWidth:1}}}><Typography sx={{fontSize:12, fontWeight:600, color:"#777"}}>Санамжууд</Typography></Divider>
                    </Box>
                    <Box sx={{width:"70%", border:"1px solid ", height:80, borderStyle:"dotted"}}>

                    </Box>
                </Box>
            </Modal>
        
        </>

    )    
}
export default AlertButtonComp;    