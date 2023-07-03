import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; // Update import for Paper
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // Styles specific to the TableCell component
  root: {
    // CSS styles here
  },
  head: {
    // CSS styles for table header cells
  },
  body: {
    // CSS styles for table body cells
  },
}));

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const token = 'wVjMnHpbNamMHxY4DP0gv2q13sc3FJnLKeKC958O';

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/task/searchTaskByUsers', {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data) {
            setTasks(data.data);
          }
        } else {
          toast.error('Failed to fetch Task data');
        }
      } catch (error) {
        toast.error(error);
      }
    };

    fetchTasks();
  }, [token]);

console.log(tasks);

  return (
    <div>
      <Box sx={{ margin: '50px', overflowX: 'auto' }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Project Name</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="center">Start</StyledTableCell>
                <StyledTableCell align="center">End</StyledTableCell>
                <StyledTableCell align="right">assigned To</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <div key={task.id}>{task.title}</div>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <div>task developer</div>
    </div>
  );
};

export default Task;
