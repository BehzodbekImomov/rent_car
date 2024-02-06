import { Box } from "@mui/material";
import { LoadingButton } from '@mui/lab';

import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';  
export default function Loading(props) {
    return (
      <div className="">
          {/* <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box> */}
 {/* <LoadingButton/> */}
 <h1 style={{fontSize:'55px',fontWeight:"700",position:"absolute",color:"red"}}>LOADING ...</h1>

      </div>
    )
  }