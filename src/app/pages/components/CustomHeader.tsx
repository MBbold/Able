import { Avatar, Box, Typography } from "@mui/material"
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
const CustomHeader = ({data}:any)=>{
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2, height: 35, }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }} >
                    <Avatar alt="user avatar" src={data.authorInfo.user_icon} sx={{":hover":{cursor:"pointer", border:"1px solid #444"}}}/>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{data.authorInfo.system_name}</Typography>
                        <Typography sx={{ fontSize: 12, color: '#1f4ba6' }}>{data.authorInfo.app_name}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', gap: 0.5, alignItems: 'center', flex: 'auto' }} >
                    <Typography sx={{ fontSize: 12 }}></Typography>
                    <Box className="toolDate">
                        <Typography sx={{ fontSize: 12, color:"#888e96", ":hover":{color:"black"}}}>{data.easyDate}</Typography>
                        <Typography className="toolDateText">{data.fullDate}</Typography>
                    </Box>
                    <a target="_blank" href={`https://www.able.mn/main.php?p=${data.encPro}&lisMod=${data.encModule}&lisId=${parseFloat(data.itemId)}`}>
                        <InsertDriveFileIcon sx={{ backgroundColor: "#65addf", borderRadius: '40%', width: 28, height: 28, color: 'white', p: 0.8, ":hover":{backgroundColor:"#1f4ba6", cursor:"pointer"}}} />
                    </a>
                    {/* https://www.able.mn/main.php?p=${data.pro}&lisMod=${data.mod}&lisId=${data.itemId} */}
                </Box>
            </Box>
    )
}
export default CustomHeader;