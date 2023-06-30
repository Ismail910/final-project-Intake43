// import * as React from 'react';
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
import InputLabel from '@mui/material/InputLabel';
import {  Select, MenuItem } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from "axios";
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Add from '@mui/icons-material/Add';
import jwtDecode from 'jwt-decode';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

const ClientProject = () => {
  const token = '2|qLJh9hNXFldz9O4QnEX0cIGFWSUbYYUwGUr38CsF';
  // const decodedToken = jwtDecode(token);
  // const id = decodedToken.user_id;
  const id = 2;
  const [projects, setProjects] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [users, setUsers] = React.useState('');

  React.useEffect(() => {
    // Fetch questions from backend API
    const fetchProjects = async () => {
      
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/project/searchProjectByUsers`, {
                  headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }}); 
              if (response.ok) {
                const data = await response.json();
                if (data) {
                  setProjects(data.data);
                }
              } else {
                toast.error("Failed to fetch Task data");

              }
            } catch (error) {
                toast.error(error);
            }
           };
    
           fetchProjects();

  },  [projects]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSave=async (event) => {
    event.preventDefault();
    // console.log(id);
    await axios.post(
      `http://127.0.0.1:8000/api/project`,
      {
        client_id: id,
        project_type: type,
        project_title: title,
        project_description: description,
        project_start: startDate,
        project_end: endDate,
        project_status: status,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    )
      .then(() => {
        toast.success("Task Created");
      })
      .catch((error) => {
        toast.error("Error Creating Task: " + error.message);
      });
    setOpen(false);
  }
  
  
  return (
    <div>
      
    </div>
  )
}

export default ClientProject
