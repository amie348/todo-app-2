// import AddTask from './AddTask';
// import Tasks from './tasks';
import { Box } from '@mui/material';
import Progress from './Progress';

export default function Todo() {
  return (
    <Box
      sx={{
        maxWidth: '500px',
        marginLeft: '20%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Progress />
    </Box>
    // <div className="ml-30 mt-10 flex justify-center">
    //   <div className="w-[500px]">
    //
    //     <AddTask />
    //     <Tasks />
    //   </div>
    // </div>
  );
}
