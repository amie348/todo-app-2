import SvgIcon from '@components/common/SvgIcon';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        marginLeft: '15%',
        marginTop: '36px',
        marginBottom: '36px',
        cursor: 'default',
      }}
    >
      <SvgIcon name={'todo'} />
      <Box sx={{ marginLeft: '16px' }}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: '#ffffff' }}>
          TODO
        </Typography>
      </Box>
    </Box>
  );
}
