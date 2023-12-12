import { Box, Typography } from '@mui/material'
import MomentsMain from './pages/momentsMain';
export default function Home() {
  console.log("server");
  
  return (
    <Box className='flex flex-auto h-auto bg-[#E8ECF1] justify-center'>
      <MomentsMain/>
    </Box>
  )
}
