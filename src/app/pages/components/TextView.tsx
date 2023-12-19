import { Box, Typography } from "@mui/material";
import TextReadMore from "./TextReadMore";

const TextView = ({ data }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        px: 2,
        height: "auto",
        flexDirection: "column",
        gap: 1,
      }}
    >
     <TextReadMore data={data.title}/>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        {data.groupName.map((el: any, index:number) => {
          return (
            <Typography
              sx={{
                p: 0.5,
                backgroundColor: "#D5D9E1",
                borderRadius: 1,
                fontSize: 11,
              }}
              key={index}
            >
              {el}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};
export default TextView;
