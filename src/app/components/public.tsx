import { Avatar, Box, Input, TextField, Typography } from "@mui/material";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Button } from "@mui/base";
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CommentComponent from "./Comment";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Public = () => {
    return (
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 2, backgroundColor: 'white', p: 1, borderRadius: 1, }}>
            <Box sx={{ display: 'flex', backgroundColor: '#FAE6DE', alignItems: 'center', px: 2, borderRadius: 1, height: 44 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flex: 'auto', gap: 2, alignItems: 'center', }}>
                    <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#d26850' }} >Г.Мөнхболд</Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#d26850' }}>-</Typography>
                    <Typography sx={{ fontSize: 13, color: '#d26850' }}>Сэтгэгдэл нэмлээ</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', gap: 0.5, flex: 'auto' }} >
                    <Typography sx={{ fontSize: 12, color: '#d26850' }}>Өчигдөр</Typography>
                    <Typography sx={{ fontSize: 12, color: '#d26850' }}>13:54</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', px: 2, height: 35 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }} >
                    <Avatar alt="user avatar" src="" />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Г.Мөнхболд</Typography>
                        <Typography sx={{ fontSize: 12, color: '#1f4ba6' }}>Ахлах программист</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', gap: 0.5, alignItems: 'center', flex: 'auto' }} >
                    <Typography sx={{ fontSize: 12 }}>Өчигдөр</Typography>
                    <Typography sx={{ fontSize: 12 }}>13:54</Typography>
                    <ChatBubbleIcon sx={{ backgroundColor: "#ED64CA", borderRadius: '30%', width: 28, height: 28, color: 'white', p: 0.7 }} />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', px: 2, height: 70, flexDirection: 'column', gap: 1, }}>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>Ажлын байрны соёл 5С хөтөлбөр</Typography>
                <Box sx={{display:'flex', gap:1}}>
                    <Typography sx={{p:0.5, backgroundColor: '#D5D9E1', borderRadius: 1, fontSize: 11, textAlign: 'center' }}>Олон нийт</Typography>
                    <Typography sx={{p:0.5, backgroundColor: '#D5D9E1', borderRadius: 1, fontSize: 11, textAlign: 'center' }}>Зар мэдээ</Typography>
                </Box>

            </Box>


            {/* <Box sx={{ height: 46, display: 'flex', px: 2, gap: 1 }}>
                <Box sx={{ backgroundColor: '#0d5ec3', height: '100%', width: 46, borderRadius: 1 }}>

                </Box>
                <Box sx={{ display: 'flex', height: '100%', width: 195, borderRadius: 1, border: "solid", borderColor: '#0d5ec3' }}>
                    <Box sx={{ display: 'flex', flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                        <Typography sx={{ color: '#0d5ec3', fontSize: 20 }}>15</Typography>
                        <Typography sx={{ color: '#0d5ec3', fontSize: 20 }}>:</Typography>
                        <Typography sx={{ color: '#0d5ec3', fontSize: 20 }}>00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 0.5, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', height: 20, width: 36, backgroundColor: '#0d5ec3', borderRadius: 1, justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                            <Typography sx={{ fontSize: 10, color: 'white' }}>1</Typography>
                            <Typography sx={{ fontSize: 10, color: 'white' }}>цаг</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                        <Typography sx={{ color: '#0d5ec3', fontSize: 20 }}>15</Typography>
                        <Typography sx={{ color: '#0d5ec3', fontSize: 20 }}>:</Typography>
                        <Typography sx={{ color: '#0d5ec3', fontSize: 20 }}>00</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', height: '100%', width: 120, borderRadius: 1, border: "solid", borderColor: '#D5D9E1' }}>
                    <Typography sx={{ fontSize: 13, m: 'auto' }}>
                        Уулзалтын өрөө
                    </Typography>
                </Box>
            </Box> */}
            <Box sx={{display:'flex', px:2}}>
                <p style={{fontSize:13, textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </Box>

            <Box sx={{ height: 'auto', display: 'flex', gap: 1, px: 2, my: 2 }}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', flex: 1, gap: 1 }}>
                    <Typography sx={{ fontSize: 13 }}>Баталсан ажилтан</Typography>
                    <Box sx={{ display: 'flex', flex: 1, gap: 1 }}>
                        <Avatar sx={{ width: 35, height: 35 }} />
                        <Box>
                            <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Г.Мөнхболд</Typography>
                            <Typography sx={{ fontSize: 13 }}>Ахлах программист</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', flex: 1, gap: 1 }}>
                    <Typography sx={{ fontSize: 13 }}>Хуралд оролцогсод (12)</Typography>
                    <Box sx={{ display: 'flex', }}>
                        <Avatar sx={{ width: 35, height: 35 }} />
                        <Avatar sx={{ width: 35, height: 35 }} />
                        <Avatar sx={{ width: 35, height: 35 }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
                <Box sx={{ height: 38, display: 'flex', gap: 1, px: 2 }}>
                    <Box sx={{ display: 'flex', flex: 1, textAlign: 'center', backgroundColor: '#D5D9E1', borderRadius: 1, alignItems: 'center', pl: 2, border: 'solid', borderColor: '#4444' }}>
                        <Typography sx={{ fontSize: 13 }}>Хэлэлцэх асуудал</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                        <Button className="h-full px-4 bg-[#00C28D] text-white rounded text-sm items-center justify-center flex">
                            <AddIcon sx={{ color: 'white', width: 14, height: 14 }} />
                            Нэмэх
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ height: 38, display: 'flex', px: 2, mx: 2, gap: 1, backgroundColor: '#D5D9E1', borderRadius: 1, alignItems: 'center', border: 'solid', borderColor: '#4444' }}>
                    <Typography sx={{ fontSize: 13 }}>1.Хэлэлцэх асуудал байна</Typography>
                </Box>
                <Box sx={{ height: 48, display: 'flex', px: 2, mx: 2, gap: 1, backgroundColor: '#D5D9E1', borderRadius: 1, alignItems: 'center', border: 'solid', borderColor: '#4444' }}>
                    <Typography sx={{ fontSize: 13 }}>2.Хэлэлцэх асуудал байна</Typography>
                </Box>
                <Box sx={{ display: 'flex', mx: 2, mt: 3 }}>
                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontSize: 11 }}>Харж буй</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Avatar sx={{ width: 25, height: 25, border: 'solid', borderColor: 'white', borderWidth: 3 }} />
                            <Avatar sx={{ width: 25, height: 25, border: 'solid', borderColor: 'white', borderWidth: 3, ml: -1 }} />
                            <Avatar sx={{ width: 25, height: 25, border: 'solid', borderColor: 'white', borderWidth: 3, ml: -1 }} />
                            <Avatar sx={{ width: 25, height: 25, border: 'solid', borderColor: 'white', borderWidth: 3, ml: -1 }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, gap: 1, alignItems: 'center', justifyContent: 'end' }}>
                        <Typography sx={{ fontSize: 11 }}>Явцын тэмдэглэл</Typography>
                        <NotificationsIcon sx={{ width: 20, height: 20 }} />
                        <AddIcon sx={{ width: 20, height: 20, px: 0.3, backgroundColor: '#D5D9E1', borderRadius: 1 }} />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ height: 'auto', display: 'flex' }}>

            </Box>
            <CommentComponent />
        </Box>
    )
}
export default Public;