import { Avatar, Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import LockIcon from '@mui/icons-material/Lock';
import AvatarComp from "../UseClient/components/AvatarComp";
const TransferDoc = ({data}:any)=>{
    const diff =data.shiftCnt -data.shiftInfo.length
    return(
        <Box sx={{
            display: "flex",
            px: 2,
            height: "auto",
            flexDirection: "column",
            gap: 1,
          }}>
                <a className="group justify-between items-center flex bg-[#ecedef] px-4 py-2 border-[#c5c8cd] rounded-md border-2 hover:border-[#a7a9aa] active:bg-[#a7a9aa] " target="_blank" href={`https://www.able.mn/main.php?p=${data.encPro}&lisMod=${data.encModule}&lisId=${parseFloat(data.itemId)}`}>
                    <Typography className="group-active:text-white" sx={{fontSize:12, fontWeight:600}}>Өмнөх шилжүүлгүүд ({diff})</Typography>
                    <ArrowOutwardIcon className="group-active:text-white" sx={{p:0.5, color:"#c5c8cd", ":hover":{borderColor:"#a7a9aa"}}}/>
                </a>
            {data.shiftInfo.map((el:any, index:number)=>{
                return(
                    <Box key={index} sx={{display:"flex", gap:1}}>
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <AvatarComp width={36} height={36} name={el.userInfo.name} path={el.userInfo.path.path}/>
                            <HorizontalRuleIcon sx={{rotate:"90deg", color:"#CDCDCD"}}/>
                            <HorizontalRuleIcon sx={{rotate:"90deg",mt:-1, color:"#CDCDCD"}}/>
                            <TurnLeftIcon sx={{rotate:"180deg",mt:-1, ml:1, color:"#CDCDCD"}}/>
                        </Box>
                        <Box sx={{display:"flex", flex:1, gap:1, flexDirection:"column"}}>
                            <Box>
                                <Typography sx={{fontSize:12, fontWeight:600}}>{el.userInfo.name}</Typography>
                                <Typography sx={{fontSize:12, color:"#1f4ba6"}}>{el.userInfo.app}</Typography>
                                <Typography sx={{fontSize:12, color:"#5d5d5d"}}>{el.receivedDate}</Typography>
                            </Box>
                            {el.cardClose && 
                            <Box sx={{display:'flex', flex:1, backgroundColor:"#ffe0dd", height:"auto", borderRadius:"6px", border:"2px solid #f5aaa3", flexDirection:"column", p:1, gap:1}}>
                                <Box sx={{display:"flex", justifyContent:"space-between", width:"100%", height:40, alignItems:"center", borderRadius:1, backgroundColor:"#e54636", p:2}}>
                                    <Typography sx={{fontSize:12, color:"#FFFF"}}>Хаалтын мэдээлэл</Typography>
                                    <LockIcon sx={{color:"#fff", p:0.2}}/>
                                </Box>
                                <Box sx={{display:"flex", width:"100%", gap:2, pl:1}}>
                                    <Typography sx={{fontSize:12, flex:0.6}}>Хариу өгсөн огноо</Typography>
                                    <Typography sx={{fontSize:12, flex:1}}>{el.closedData.answeredDate} {el.closedData.answeredWeek}</Typography>
                                </Box>
                                <Box sx={{display:"flex", width:"100%", gap:2, pl:1}}>
                                    <Typography sx={{fontSize:12, flex:0.6}}>Хариулсан хэлбэр</Typography>
                                    <Typography sx={{fontSize:12, flex:1, fontWeight:600}}>{el.closedData.answeredType}</Typography>
                                </Box>
                                <Box sx={{display:"flex", width:"100%", gap:2, pl:1}}>
                                    <Typography sx={{fontSize:12, flex:0.6}}>Хэрхэн шийдвэрлэсэн</Typography>
                                    <Typography sx={{fontSize:12, flex:1, fontWeight:600}}>{el.closedData.closedNote}</Typography>
                                </Box>
                                <Box sx={{display:"flex", width:"100%", gap:2, pl:1}}>
                                    <Typography sx={{fontSize:12, flex:0.6}}>Картыг хаасан</Typography>
                                    <Typography sx={{fontSize:12, flex:1, fontWeight:600}}>{el.userInfo.name} - {el.userInfo.app}</Typography>
                                </Box>
                            </Box>}
                            {el.ruleData && 
                                <Box sx={{backgroundColor:"#e4eefb", border:"2px solid #b8cdea", borderRadius:2, p:1, display:"flex", flexDirection:"column", justifyContent:"start", gap:0.3}}>
                                    <Typography sx={{fontSize:12, p:0.2, textAlign:"center", backgroundColor:"#f8fafd", border:"1px solid #c3d9f7", borderRadius:1, width:120, color:"#4474aa"}}>{el.ruleData.title}</Typography>
                                    <Typography sx={{fontSize:12, color:"#054d8c"}}>{el.ruleData.note}</Typography>
                                    <Typography sx={{fontSize:12, p:0.2, width:80, textAlign:"center", backgroundColor:"#c3d6ef", color:"#054d8c", borderRadius:1}}>{el.ruleData.ruleDate}</Typography>
                                </Box> }
                            {el.lastShift && 
                            <Box sx={{display:"flex", flex:1, gap:0.5}}>
                                <button style={{ width:100, height:34, backgroundColor:"#4343f7", fontSize:12, color:"#fff", borderRadius:2}}>
                                    Шилжүүлэг
                                </button>
                                <button style={{ width:70, height:34, backgroundColor:"#00c28d", fontSize:12, color:"#fff", borderRadius:2,display:"flex", justifyContent:"center", alignItems:"center"}} >
                                    <LockIcon sx={{p:0.4, ml:-1}}/>
                                    Хаах
                                </button>
                            </Box>}
                        </Box>

                    </Box>
                )
            })}
        </Box>
    )
}
export default TransferDoc;