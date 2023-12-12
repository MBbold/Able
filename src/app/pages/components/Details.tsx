import { Box, Typography } from "@mui/material";

const Details = ({data}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#FAE6DE",
        alignItems: "center",
        px: 2,
        borderRadius: 1,
        height: 44,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: "auto",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#d26850" }}>
          {data.actionBar.actionAuthorInfo.system_name}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#d26850" }}>
          -
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#d26850" }}>
          {data.actionBar.title == "cardClose" &&
          data.module == "complain"
            ? "Өргөдлийг хаалаа"
            : "Одоогоор юм алга"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          gap: 0.5,
          flex: "auto",
        }}
      >
        <Typography sx={{ fontSize: 12, color: "#d26850" }}>Өчигдөр</Typography>
        <Typography sx={{ fontSize: 12, color: "#d26850" }}>13:54</Typography>
      </Box>
    </Box>
  );
};
export default Details;
