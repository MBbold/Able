import { Box } from "@mui/material";
import Details from "../pages/components/Details";
import CustomHeader from "../pages/components/CustomHeader";
import SenderBox from "../pages/components/SenderBox";
import TextView from "../pages/components/TextView";
import FileComponent from "./Files";
const Docs = ({postData}:any) => {

  return (
    <Box key={postData.index} sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 2, backgroundColor: 'white', p: 1, borderRadius: 1, }}>
        <Details data={postData}/>
        <CustomHeader data={postData}/>
        <SenderBox data={postData}/>
        <TextView data={postData}/>
        <FileComponent data={postData}/>
    </Box>
  );
};
export default Docs