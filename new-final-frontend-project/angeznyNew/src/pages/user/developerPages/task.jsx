import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
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
  const [disabled, setDisabled] = useState(false);
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

  const handleAction = (taskId, action) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: action };
      }
      return task;
    });
    setTasks(updatedTasks);
    setDisabled(true); 
  };
  


 

  return (
    <div>
      <Box sx={{ margin: '50px', overflowX: 'auto' }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Task Description</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="center">Start</StyledTableCell>
                <StyledTableCell align="center">End</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    <div>{task.projectName}</div>
                    <div>{task.assignedTo}</div>
                  </TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell align="right">{task.status}</TableCell>
                  <TableCell align="center">{task.start}</TableCell>
                  <TableCell align="center">{task.end}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={disabled}
                      onClick={() => handleAction(task.id, 'Accept')}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={disabled}
                      onClick={() => handleAction(task.id, 'Ignore')}
                    >
                      Ignore
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Task;
