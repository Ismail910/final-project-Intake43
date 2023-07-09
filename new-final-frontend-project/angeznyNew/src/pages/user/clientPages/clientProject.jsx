import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Card, Row, Col } from "react-bootstrap";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Select, MenuItem } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Aos from "aos";
import "./styles.css";
import "aos/dist/aos.css";

const ClientProject = ({ statusProject }) => {
  const token = localStorage.getItem("token");
  const usrID = localStorage.getItem("user_id");
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/projects/searchProjectByUsers`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setProjects(data.data);
          }
        } else {
          setProjects([]);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchProjectsByStatus = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/projects/search/${statusProject}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setProjects(data.data);
          }
        } else {
          setProjects([]);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (statusProject === "all") {
      fetchProjects();
    } else {
      fetchProjectsByStatus();
    }
  }, [statusProject]);

  const getClassByStatus = (statusProject) => {
    if (statusProject === "completed") {
      return "green";
    } else if (statusProject === "inProgress") {
      return "yellow";
    } else {
      return "red";
    }
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/projects/${projectId}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Project with ID: ${projectId} deleted successfully`);
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      toast.error("Error deleting project: " + error.message);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (selectedProject) {
      // Update existing project
      try {
        await axios.patch(
          `http://127.0.0.1:8000/api/projects/${selectedProject.id}`,
          {
            project_title: title || selectedProject.project_title,
            project_type: type || selectedProject.project_type,
            project_description:
            description || selectedProject.project_description,
            project_start: startDate || selectedProject.project_start,
            project_end: endDate || selectedProject.project_end,
            project_status: "notStarted",
            budget: budget,
            ProductOwner_id: selectedProject.ProductOwner_id,
            ProductManager_id: selectedProject.ProductManager_id,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Project Updated");
        setOpen(false);
        setSelectedProject(null);
        refreshProjects();
      } catch (error) {
        toast.error("Error updating project: " + error.message);
      }
    } else {
      // Create new project
      try {
        await axios.post(
          `http://127.0.0.1:8000/api/projects`,
          {
            project_title: title,
            project_type: type,
            project_description: description,
            project_start: startDate,
            project_end: endDate,
            budget: budget,
            project_status: "notStarted",
            client_id: usrID,
            ProductOwner_id: 99,
            ProductManager_id: 99,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Project Created");
        setOpen(false);
        refreshProjects();
      } catch (error) {
        toast.error("Error Creating project: " + error.message);
      }
    }
  };

  const openHandleSave = (event) => {
    event.preventDefault();
    setTitle("");
    setType("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setBudget("");
    setSelectedProject(null);
    setOpen(true);
  };

  const refreshProjects = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/projects/searchProjectByUsers`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setProjects(data.data);
        }
      } else {
        setProjects([]);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center row conatingData">
      <Button
        className="mt-4 w-25 mb-5 addbtn"
        variant="outlined"
        color="neutral"
        sx={{ width: "95%", marginLeft: "30px", marginBottom: "5px" }}
        onClick={openHandleSave}
      >
        Create New Project
      </Button>
      <Modal
        sx={{ overflow: "auto" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500, overflow: "auto" }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            {selectedProject ? "Edit Project" : "Create New Project"}
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            textColor="text.tertiary"
          >
            Fill in the information of the Project.
          </Typography>
          <form onSubmit={handleSave}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  value={title || selectedProject?.name}
                  onChange={handleTitleChange}
                  autoFocus
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Type Project</FormLabel>
                <Select
                  value={type || selectedProject?.project_type}
                  onChange={handleTypeChange}
                  autoFocus
                  required
                >
                  <MenuItem value="mileStone">mileStone</MenuItem>
                  <MenuItem value="byProject">byProject</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Start</FormLabel>
                <Input
                  value={startDate || selectedProject?.start}
                  onChange={handleStartDateChange}
                  autoFocus
                  required
                  type="date"
                />
              </FormControl>
              <FormControl>
                <FormLabel>End</FormLabel>
                <Input
                  value={endDate || selectedProject?.end}
                  onChange={handleEndDateChange}
                  autoFocus
                  required
                  type="date"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Budget</FormLabel>
                <Input
                  value={budget || selectedProject?.budget}
                  onChange={handleBudgetChange}
                  autoFocus
                  required
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <TextareaAutosize
                  minRows={3}
                  value={description || selectedProject?.description}
                  onChange={handleDescriptionChange}
                  autoFocus
                  required
                />
              </FormControl>
              <Button type="submit">
                {selectedProject ? "Update" : "Submit"}
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <div>
        <Row className="d-flex justify-content-center">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((item) => (
              <Col key={item.id} lg={5} md={5} sm={5}>
                <Card className="mb-4 cardData " div data-aos="zoom-in-up">
                  <Card.Body>
                    <Card.Title>Title of project : {item.name}</Card.Title>
                    <Card.Text>{item.type}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                    <span className={getClassByStatus(item.status)}></span>

                    <Button
                      onClick={() => handleEdit(item)}
                      disabled={item.status !== "notStarted"}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button
                      className="deleteBtn"
                      onClick={() => handleDelete(item.id)}
                      disabled={item.status !== "notStarted"}
                    >
                      <i class="fa-solid fa-circle-xmark"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Typography component="div" align="center" color="danger">
              No projects found.
            </Typography>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ClientProject;
