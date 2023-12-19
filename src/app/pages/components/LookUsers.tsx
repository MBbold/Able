import { Avatar, AvatarGroup, Box, Button, Modal, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import AddButtonComp from "../UseClient/components/AddButtonComp";
import AvatarComp from "../UseClient/components/AvatarComp";
import AlertButtonComp from "./AlertButtonComp";
const LookUsers = ({data}:any)=>{

    return(
        <Box sx={{
            display: "flex",
            px: 2,
            height: "auto",
            gap: 1,
            justifyContent:"space-between"
          }}>
            <Box sx={{display:"flex", flex:1, alignItems:"center", gap:1}}>
                <Typography sx={{fontSize:12, color:"#60656b",fontWeight:600}}>Харж буй</Typography>
                <AvatarGroup total={data.sharedUser.length}>
                    {data.sharedUser.map((el:any, index:number)=>{
                        return(
                            <AvatarComp key={index} width={22} height={22} name={el.overHint} path={el.path}/>
                        )
                    })}
                </AvatarGroup>
            </Box>
            <Box sx={{display:"flex", flex:1, alignItems:"center", justifyContent:"end", gap:1}}>
                    <Typography sx={{fontSize:12, color:"#60656b", fontWeight:600}}>Явцын тэмдэглэл ({data.commentCnt})</Typography>
                    <AlertButtonComp/>
                    <AddButtonComp value="Дэмжих"/>
            </Box>
            
        </Box>
    )
}
export default LookUsers;