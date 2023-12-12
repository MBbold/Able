import { Box, Typography } from "@mui/material";
import TurnRightIcon from "@mui/icons-material/TurnRight";

const SenderBox = ({data}: any) => {
  return (
    <>
      {data.senderName ? (
        <Box sx={{ display: "flex", alignItems: "center", px: 2, height: 35 }}>
          <Typography sx={{fontSize:11, color:"#5c88cd"}}>{data.senderName}</Typography>
          <TurnRightIcon sx={{ p:0.5, color:"#5c88cd", rotate:"90deg"}}/>
        </Box>
      ) : null}
    </>
  );
};
export default SenderBox;
