import { Box, Typography } from '@mui/material';

export default function Progress() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '176px',
        width: '450px',
        border: '1px solid #C2B39A',
        borderRadius: '10px',
        marginLeft: '',
      }}
    >
      <Box
        sx={{
          paddingLeft: '30px',
          paddingTop: '40px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '30px',
            color: '#ffffff',
          }}
        >
          Task Done
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            color: '#ffffff',
          }}
        >
          Keep it up
        </Typography>
      </Box>
      <Box
        sx={{
          height: '150px',
          width: '150px',
          borderRadius: '50%',
          backgroundColor: '#88AB33',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '50px',
          color: '#ffffff',
          marginTop: '14px',
          marginRight: '30px',
        }}
      >
        <Typography
          sx={{
            fontSize: '50px',
            color: '#ffffff',
          }}
        >
          0/0
        </Typography>
      </Box>
    </Box>
  );
}
