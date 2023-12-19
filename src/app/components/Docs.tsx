import { Box } from "@mui/material";
import Details from "../pages/components/Details";
import CustomHeader from "../pages/components/CustomHeader";
import SenderBox from "../pages/components/SenderBox";
import TextView from "../pages/components/TextView";
import FileComponent from "./Files";
import TransferDoc from "../pages/components/TransferDoc";
import LookUsers from "../pages/components/LookUsers";
import CommentComp from "../pages/components/CommentComp";
const Docs = ({postData}:any) => {

  return (
    <Box key={postData.index} sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 2, backgroundColor: 'white', p: 1, borderRadius: 1, }}>
        <Details data={postData}/>
        <CustomHeader data={postData}/>
        <SenderBox data={postData}/>
        <TextView data={postData}/>
        <FileComponent data={postData}/>
        <TransferDoc data={postData}/>
        <LookUsers data={postData}/>
        <CommentComp data={postData}/>
    </Box>
  );
};
export default Docs