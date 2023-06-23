// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <StyledTableRow component={Paper} sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <StyledTableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </StyledTableCell>
//         <StyledTableCell component="th" scope="row">
//           {row.name}
//         </StyledTableCell>
//         <StyledTableCell align="right">{row.calories}</StyledTableCell>
//         <StyledTableCell align="right">{row.fat}</StyledTableCell>
//         <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//         <StyledTableCell align="right">{row.protein}</StyledTableCell>
//       </StyledTableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }



// const rows = [
//   createData('Frozen yoghurt', "Complete", "07/07/2023", "07/07/2023", "omar"),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));
// const Tasks = () => {
//   const [tasks, setTasks] = useState([]);
//   useEffect(() => {
//     // Fetch questions from backend API
//     const fetchTasks = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/result/${resultId}`); 
//               if (response.ok) {
//                 const data = await response.json();
//                 if (data) {
//                     setTasks(data.studentAnswer);
//                 }
//               } else {
//                 toast.error("Failed to fetch exam data");

//                 throw new Error("Failed to fetch exam data");
//               }
//             } catch (error) {
//                 toast.error(error);
//             }
//            };
          
    
          
//     fetchTasks();
    
    

//   }, []);
//   return (
//     <Box sx={{ margin: '50px', overflowX: 'auto' }}>
//       <TableContainer component={Paper}>
//         <Table aria-label="collapsible table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell />
//               <StyledTableCell>Title</StyledTableCell>
//               <StyledTableCell align="right">Status</StyledTableCell>
//               <StyledTableCell align="right">Start</StyledTableCell>
//               <StyledTableCell align="right">End</StyledTableCell>
//               <StyledTableCell align="right">assigned To</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tasks.map((task) => (
//               <Row key={task.id} row={task} />
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Tasks;
