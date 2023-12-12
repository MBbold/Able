import { Avatar, Box, TextField, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const CommentComponent = () => {
    return (
        <Box sx={{ height: "auto", display: 'flex', backgroundColor: '#f6f8fa', flexDirection: 'column', py: 3, gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1, mx: 2, alignItems: 'center', gap: 1 }}>
                <Box sx={{ height: '100%' }}>
                    <Avatar sx={{ width: 35, height: 35 }} />
                </Box>
                <TextField
                    hiddenLabel
                    placeholder="Таны сэтгэгдэл ..."
                    sx={{ flex: 1, backgroundColor: 'white' }}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mx: 2, }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', gap: 1 }}>
                    <Box sx={{ height: '100%' }}>
                        <Avatar sx={{ width: 35, height: 35 }} />
                    </Box>
                    <Box sx={{ width: "auto", height: 'auto', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 1, border: 'solid', borderColor: "#D5D9E1", p: 1 }}>
                        <Box sx={{ flex: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 600 }}>Г.Мөнхболд</Typography>
                            <FiberManualRecordIcon sx={{ width: 6, height: 6, color: '#999da0' }} />
                            <Typography sx={{ fontSize: 12, color: '#999da0' }}>Уржигдар</Typography>
                            <Typography sx={{ fontSize: 12, color: '#999da0' }}>17:40</Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mx: 6, gap: 0.5, display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <AddIcon sx={{ width: 20, height: 20, px: 0.3, backgroundColor: '#D5D9E1', borderRadius: 1 }} />
                    <FiberManualRecordIcon sx={{ width: 6, height: 6, color: '#999da0' }} />
                    <Typography sx={{ fontSize: 12, color: '#999da0' }}>Уржигдар</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mx: 8, }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', gap: 1 }}>
                    <Box sx={{ height: '100%' }}>
                        <Avatar sx={{ width: 25, height: 25 }} />
                    </Box>
                    <Box sx={{ width: "auto", height: 'auto', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 1, border: 'solid', borderColor: "#D5D9E1", p: 1 }}>
                        <Box sx={{ flex: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Typography sx={{ fontSize: 12, fontWeight: 600 }}>Г.Мөнхболд</Typography>
                            <FiberManualRecordIcon sx={{ width: 6, height: 6, color: '#999da0' }} />
                            <Typography sx={{ fontSize: 12, color: '#999da0' }}>Уржигдар</Typography>
                            <Typography sx={{ fontSize: 12, color: '#999da0' }}>17:40</Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mx: 6, gap: 0.5, display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
                    <AddIcon sx={{ width: 20, height: 20, px: 0.3, backgroundColor: '#D5D9E1', borderRadius: 1 }} />
                    <FiberManualRecordIcon sx={{ width: 6, height: 6, color: '#999da0' }} />
                    <Typography sx={{ fontSize: 12, color: '#999da0' }}>Уржигдар</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default CommentComponent