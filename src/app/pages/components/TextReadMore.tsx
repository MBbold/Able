"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const TextReadMore = ({data}:any) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleBtn = () => {
    setIsReadMore((prevState) => !prevState);
  };
  return (
    <Box sx={{ height: "auto" }}>
      <Typography
        sx={{
          textAlign: "justify",
          fontSize: 19,
          fontWeight: 600,
          lineHeight: "1.5rem",
          
        }}
      >
        {isReadMore ? data : data.substring(0, 100)}
        {data.length <= 100 ? null : (
          <button className="text-[#2f61bb] ml-1" onClick={toggleBtn}> {isReadMore ? ".. Хураах" : " .. Цааш үзэх"}</button>
        )}
      </Typography>
    </Box>
  );
};
export default TextReadMore;
