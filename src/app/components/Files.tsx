import { Box, Slider, Typography } from "@mui/material";
import Image from "next/image";
import files from "../../../public/Tursun.png"
import Link from "next/link";

const FileComponent = ({data}:any)=>{
    return(
        <Box sx={{
            display: "flex",
            px: 2,
            height: "auto",
            flexDirection: "row",
            gap: 4,
          }}>
            {data.files.length > 0 ? <Box sx={{width:150, height:180, border:"solid", borderRadius:2, borderWidth:1, borderColor:"#3333", position:'relative', ":hover":{cursor:"pointer", border:"2px solid #4444"}}}>
            <Link href={data.files[0].dir}>
                <Image src={files} alt="Docs file" style={{objectFit: "cover", borderRadius:7}} fill={true} />
            </Link>
            </Box>:null}
            <Box sx={{ display:"flex", flex:1, flexDirection:data.files.length > 0 ? 'column' : 'row'}}> 
                <Box sx={{flex:1, display:"flex", flexDirection:'column', justifyContent: data.files.length > 0 ? "center" :""}}>
                    <Typography sx={{fontSize:12, fontWeight:550, color:"#515356"}}>Бүртгэлийн дугаар</Typography>
                    <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                        <Box sx={{border:"1px solid #fbebdb", borderRadius:"4px", backgroundColor:"#fbebdb", color:"#a94e12", p:"5px 10px 5px 10px", fontSize:14, fontWeight:600}}>
                            {data.autoNumber}
                        </Box>
                        <Typography sx={{fontSize:10, color:"#6c8ac8", width:50}}>Манайд бүртгэгдсэн</Typography>
                    </Box>
                </Box>
                <Box sx={{flex:1, display:"flex", flexDirection:'column', justifyContent:'start'}}>
                    <Typography sx={{fontSize:12, fontWeight:550, color:"#515356"}}>Хариу өгөх огноо</Typography>

                    <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                        <Box sx={data.restDay < 0 ? style.test1 : style.test}>
                            {data.answerDate}
                        </Box>
                        <Typography sx={{fontSize:10, color:"#6c8ac8", width:50}}>{data.week}</Typography>
                    </Box>
                    {data.restDay >=0 && <Slider
                        disabled
                        marks={false}
                        max={data.pastDay + data.restDay}
                        min={0}
                        value={data.restDay}
                        size="small"
                        />}
                    {!data.shiftInfo[0].cardClose ? <Box display={"flex"} sx={{mt:1, gap:1}}>                    
                        {data.restDay >=0  && <Typography sx={{fontSize:12}}>{!data.pastDay ? '' : data.pastDay +' хоног'}</Typography>}
                        <Typography sx={{fontSize:12, color:data.restDay <0 ? "red" : ""}}> {!data.restDay ? 'Өнөөдөр' : (data.restDay >0 ? data.restDay +' хоног үлдсэн' : (data.restDay <0 ? '('+ Math.abs(data.restDay) +' хоног хэтэрсэн)' : ''))} </Typography>
                    </Box>:null}
                </Box>
            </Box>
        </Box>
    )
}
const style = {
    test: {
        border:"1px solid rgb(255, 203, 203)",
    borderRadius:"4px",
    backgroundColor:"rgb(255, 203, 203)",
    color:"rgb(207, 66, 65)",
    p:"5px 10px 5px 10px", fontSize:14, fontWeight:600
    },
    test1:{
        border:"1px solid rgb(255, 203, 203)",
    borderRadius:"4px",
    backgroundColor:"#db4f4f",
    color:"#fff",
    p:"5px 10px 5px 10px", fontSize:14, fontWeight:600
    }
}
export default FileComponent;