import { Box } from "@mui/material";
import Docs from "../components/Docs";
import Meeting from "../components/meeting";
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
      {datas.datas.map((postData, index)=>{
        return(
            postData.pro === "docs" ? <Docs key={index} postData={postData}/> : null
        )
      })}
      
           <Meeting />
    </Box>
  );
};
export default MomentsMain;
