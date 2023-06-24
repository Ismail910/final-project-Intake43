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
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './styles.css';
import Button  from "@mui/material/Button";
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const getClassByStatus = (status) => {
    if (status === 'completed') {
      return 'green'; // Apply green color for 'completed' status
    } else if (status === 'in_progress') {
      return 'warning'; // Apply warning color for 'in_progress' status
    } else {
      return 'red'; // Apply red color for other statuses
    }
  };
  return (
    <React.Fragment>
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
        <StyledTableCell align="right" className={getClassByStatus(row.status)}>
      {row.status}
    </StyledTableCell>
        <StyledTableCell align="right">{row.start}</StyledTableCell>
        <StyledTableCell align="right">{row.end}</StyledTableCell>
        <StyledTableCell align="right">{row.productManager.name}</StyledTableCell>
        <StyledTableCell align="center">
        <Button variant="contained" className="ms-5"  color="warning">Edite</Button>
        <Button variant="contained" className="ms-1" color="error">Delete</Button>
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
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Start</StyledTableCell>
              <StyledTableCell align="right">End</StyledTableCell>
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
