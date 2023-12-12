import { Avatar, Box, Typography } from "@mui/material"
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const CustomHeader = ({data}:any)=>{
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, height: 35 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }} >
                    <Avatar alt="user avatar" src={""}/>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{data.authorInfo.system_name}</Typography>
                        <Typography sx={{ fontSize: 12, color: '#1f4ba6' }}>{data.authorInfo.app_name}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', gap: 0.5, alignItems: 'center', flex: 'auto' }} >
                    <Typography sx={{ fontSize: 12 }}></Typography>
                    <Typography sx={{ fontSize: 12 }}>{data.easyDate}</Typography>
                    <InsertDriveFileIcon sx={{ backgroundColor: "#65addf", borderRadius: '40%', width: 28, height: 28, color: 'white', p: 0.7 }} />
                </Box>
            </Box>
    )
}
export default CustomHeader;