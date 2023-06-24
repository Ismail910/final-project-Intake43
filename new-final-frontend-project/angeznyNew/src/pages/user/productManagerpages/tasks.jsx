import * as React from 'react';
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/joy/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import {  Select, MenuItem } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from "axios";
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [status, setStatus] = React.useState(row.status);
  const [title, setTitle] = React.useState(row.name);
  const [description, setDescription] = React.useState(row.description);
  const [startDate, setStartDate] = React.useState(row.start);
  const [endDate, setEndDate] = React.useState(row.start);

  const getClassByStatus = (status) => {
    if (status == 'completed') {
      return "green"; // Apply green color for 'completed' status
    } else if (status == 'in_progress') {
      return 'warning'; // Apply warning color for 'in_progress' status
    } else {
      return 'red'; // Apply red color for other statuses
    }
  };
  React.useEffect(() => {
    const startdate = row.start.split(' ')[0]; // Extract the date part from row.start
    setStartDate(startdate);
    const enddate = row.end.split(' ')[0];
    setEndDate(enddate);
  }, [row.start,row.end]);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handleSave=(event) => {
    event.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/tasks/${row.id}`, {

      })
      .then(()=>{toast.success("Exam Time Updating")})
      .catch((error) => toast.error("Error updating exam:", error));
    setOpenDialog(false);
  }
  return (
    <React.Fragment>
      <style>
        {
          `
          .green {
            color: green;
          }
          
          .warning {
            color: yellow;
          }
          
          .red {
            color: red;
          }
          `
        }
      </style>
      <StyledTableRow component={Paper} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.project.name}
        </StyledTableCell>
        <StyledTableCell align="right" className={getClassByStatus(row.status)}>
      {row.status}
    </StyledTableCell>
        <StyledTableCell align="right">{row.start}</StyledTableCell>
        <StyledTableCell align="right">{row.end}</StyledTableCell>
        <StyledTableCell align="right">{row.productManager.name}</StyledTableCell>
        <StyledTableCell align="center">
        <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpenDialog(true)}
      >
       <EditIcon variant="contained" className="ms-2" color="warning" />
      </Button>
        
        <Modal open={openDialog} onClose={() => setOpenDialog(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 700 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Update Information Task
          </Typography>
          
          <form
            onSubmit={handleSave}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={handleTitleChange} autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                value={status}
                onChange={handleStatusChange}
                autoFocus
                required
              >
                <MenuItem value="notStarted">Not Started</MenuItem>
                <MenuItem value="inProgress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Start</FormLabel>
                <Input value={startDate} onChange={handleStartDateChange} autoFocus required type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>End</FormLabel>
                <Input value={endDate} onChange={handleEndDateChange} autoFocus required type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>assigned To</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <TextareaAutosize minRows={3} value={description} onChange={handleDescriptionChange} autoFocus required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
        <DeleteForeverIcon variant="contained" className="ms-1" color="error"/>
       
        </StyledTableCell>
        
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
              Description
              </Typography>
              <Box>
                {row.description}
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    // Fetch questions from backend API
    const fetchTasks = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/tasks`); 
              if (response.ok) {
                const data = await response.json();
                if (data) {
                    setTasks(data.data);
                }
              } else {
                toast.error("Failed to fetch exam data");

                throw new Error("Failed to fetch exam data");
              }
            } catch (error) {
                toast.error(error);
            }
           };
          
    
          
    fetchTasks();
    
    

  }, []);
  return (
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
              <Row key={task.id} row={task} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tasks;
