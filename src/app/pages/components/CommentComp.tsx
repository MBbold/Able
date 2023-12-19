
import { Avatar, Box, Popover, TextField, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddButtonComp from "../UseClient/components/AddButtonComp";
import AvatarComp from "../UseClient/components/AvatarComp";

const CommentComp = ({data}:any)=>{

    const renderHTML = (htmlString: string) => {
        return { __html: htmlString };
    };
    return(
        <Box sx={{display:'flex', backgroundColor:"#f6f8fa", width:"100%", height:"auto", flexDirection:"column"}}>
            <Box sx={{display:"flex", gap:1, my:1, px:2}}>
                <Avatar sx={{width:30, height:30}} src={data.holder.icon.path} alt="userIcon"/>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Таны сэтгэгдэл ..."
                    multiline
                    maxRows={2}
                    sx={{width:"100%", backgroundColor:"#fff", fontSize:12}}
                    inputProps={{style:{fontSize:12}}}
                    InputLabelProps={{style:{fontSize:13}}}
                    />
            </Box>
            {data.comments && data.comments.map((el:any, index:number)=>{
                return(
                    <Box key={index} sx={{display:"flex", px:2,gap:1, mt:1}}>
                        {/* <Avatar title={el.author.name} sx={{width:30, height:30}} src={el.author.icon.path} alt="userIcon"/> */}
                        <AvatarComp width={30} height={30} name={el.author.name} path={el.author.icon.path}/>
                        <Box>
                            <Box sx={{borderRadius:2, border:"1px solid #d1dae3", backgroundColor:"#fff", p:1}}>
                                <Box sx={{display:"flex", alignItems:"center"}}>
                                    <Typography sx={{fontSize:12, fontWeight:600}}>{el.author.name}</Typography>
                                    <FiberManualRecordIcon sx={{p:1.2, color:"#999da0"}}/>
                                    <Typography sx={{fontSize:12, color:"#999da0"}}>{el.date}</Typography>
                                </Box>
                                <Box sx={{fontSize:12}} dangerouslySetInnerHTML={renderHTML(el.comment)}>
                                </Box>
                            </Box>
                            <Box sx={{display:"flex", alignItems:"center",mt:1}}>
                                <AddButtonComp value="Дэмжих"/>
                                <FiberManualRecordIcon sx={{p:1.2, color:"#7a848e"}}/>
                                <Typography sx={{fontSize:12, color:"#7a848e", fontWeight:550, ":hover":{color:"#444", cursor:"pointer"}}}>Хариулах</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            })}


        </Box>
    )
}
export default CommentComp;