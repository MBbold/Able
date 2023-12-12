import { Box, Divider, Typography } from "@mui/material";
import Meeting from "../components/meeting";
import Public from "../components/public";
import Docs from "../components/Docs";
import datas from "../data/data.json";

const MomentsMain = () => {
  console.log();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 0.35,
        height: "auto",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {datas.datas.map((postData)=>{
        return(
            postData.pro === "docs" ? <Docs postData={postData}/> : null
        )
      })}
      
           <Meeting />
    </Box>
  );
};
export default MomentsMain;
