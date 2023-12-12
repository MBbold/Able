import { Box, SvgIcon, Typography } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchButton from "./components/searchButton";
import { Button } from "@mui/base";

export const Header = () => {
    console.log("starting header");
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#E8ECF1', alignItems: 'center', justifyContent: 'center', height: 100 }}>
            <Box className="flex basis-[34%] items-center justify-between ">
                <Box className="flex items-center flex-row flex-auto gap-2">
                    <SvgIcon sx={{ width: 30, height: 30 }} viewBox='0 0 30 30'>
                        <path fill="#FD3137" d="M15,0C3.75,0,0,3.75,0,15s3.75,15,15,15s15-3.75,15-15S26.25,0,15,0z M27.702,11.65 c-4.721,0.347-5.299,3.799-5.679,10.052c0,0.441-0.357,0.798-0.797,0.798c-0.001,0-0.003,0-0.003,0c-0.001,0-0.003,0-0.003,0 c-0.001,0-0.003,0-0.004,0c-0.002,0-0.002,0-0.003,0c-0.44,0-0.797-0.356-0.797-0.798c-0.38-6.253-0.958-9.705-5.68-10.052 c-0.44,0-0.797-0.357-0.797-0.796c0-0.44,0.356-0.798,0.797-0.798c4.457-0.329,5.24-3.301,5.616-7.96 C20.356,2.055,20.541,1.5,21.221,1.5c0.679,0,0.862,0.555,0.865,0.596c0.376,4.66,1.16,7.631,5.616,7.96 c0.441,0,0.798,0.357,0.798,0.798C28.5,11.293,28.144,11.65,27.702,11.65z" />
                    </SvgIcon>
                    <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
                        Able Moments
                    </Typography>
                </Box>
                <Box className="flex flex-auto justify-end gap-2 h-7">
                    <Button className="text-[#8F959D] bg-[#D5D9E1] w-12 rounded items-center flex justify-center" >
                        <RefreshIcon fontSize="small" className="" />
                    </Button>
                    <SearchButton />
                </Box>
            </Box>
        </Box>
    )
}