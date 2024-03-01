import { Box, CircularProgress } from "@mui/material";
export default function Loading() {
  return (
    // <div className="loadCont">
    //   <Box sx={{display:"flex"}}>

    //   <CircularProgress size={80}   disableShrink />
    //   </Box>
    // </div>
    <div className="loadingContainer">
      <div className="content">Loading</div>
    </div>
  );
}
