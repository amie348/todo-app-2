// import AddTask from './AddTask';
// import Tasks from './tasks';
import { Box } from '@mui/material';
import Progress from './Progress';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default function Todo() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '450px',
        }}
      >
        <Progress />
        <AddTask />
        <Tasks />
      </Box>
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
