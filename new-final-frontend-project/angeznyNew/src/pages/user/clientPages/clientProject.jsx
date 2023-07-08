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
import "./styles.css";
import { CometChat } from "@cometchat-pro/chat";

const ClientProject = ({ statusProject }) => {
  const token = localStorage.getItem("token");
  const usrID = localStorage.getItem("user_id");
  const [projects, setProjects] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [budget, setBudget] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const getClassByStatus = (statusProject) => {
    if (statusProject === "completed") {
      return "green"; // Apply green color for 'completed' status
    } else if (statusProject === "inProgress") {
      return "yellow"; // Apply warning color for 'in_progress' status
    } else {
      return "red"; // Apply red color for other statuses
    }
  };

  function createChatGroup(
    projectID,
    projectName,
    productOwnerId,
    productManagerId
  ) {
    const appID = "240169ef153c40df";
    const region = "US";
    const authKey = "581f246117c147b5f041cf28049c89388b3fc5cd";
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .build();
    CometChat.init(appID, appSetting).then(
      () => {
        console.log("Initialization completed successfully");
        // You can now proceed with rendering your app or calling the login function.
        // var uid = "user1";
        // var name = "Kevin";
        var uid = localStorage.getItem("user_id");
        var name = localStorage.getItem("user_userName");
        CometChat.login(uid, authKey).then(
          (user) => {
            console.log("Login Successful:", { user });

            // Create a group
            const groupType = CometChat.GROUP_TYPE.PUBLIC;
            const groupName = "Group Chat";
            const membersList = [
              productOwnerId,
              productManagerId,
              localStorage.getItem("user_id"),
            ]; // User IDs of user1 and user2

            const group = new CometChat.Group("2", groupName, groupType, "");
            CometChat.createGroup(group).then(
              (createdGroup) => {
                console.log("Group created successfully:", createdGroup);

                // Add current user and other users to the group
                const groupMembers = membersList.map(
                  (member) =>
                    new CometChat.GroupMember(
                      member,
                      CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
                    )
                );

                console.log(
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                );
                console.log(groupMembers);
                CometChat.addMembersToGroup(
                  createdGroup.guid,
                  groupMembers,
                  []
                ).then(
                  (response) => {
                    console.log("Members added successfully:", response);
                    // Handle successful group creation and member addition
                  },
                  (error) => {
                    console.log("Error adding members to group:", error);
                    // Handle error adding members to the group
                  }
                );
              },
              (error) => {
                console.log("Error creating group:", error);
                // Handle error creating group
              }
            );
          },
          (error) => {
            console.log("Login failed with exception:", { error });
          }
        );
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        // Check the reason for error and take appropriate action.
      }
    );
  }

  React.useEffect(() => {
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
            console.log(projects.json());
          }
        } else {
          setProjects([]);
        }
      } catch (error) {
        toast.error(error);
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
        toast.error(error);
      }
    };

    if (statusProject === "all") {
      fetchProjects();
    } else {
      fetchProjectsByStatus();
    }
  }, [statusProject]);

  const handleEdit = (project) => {
    setSelectedProject(project);
    setTitle(selectedProject?.name);
    setType(selectedProject?.project_type);
    setDescription(selectedProject?.description);
    setStartDate(selectedProject?.start);
    setEndDate(selectedProject?.end);
    setBudget(selectedProject?.budget);
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
      await axios
        .patch(
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
        )
        .then((response) => {
          toast.success("Project Updated");
          setOpen(false);
          setSelectedProject(null);
        })
        .catch((error) => {
          toast.error("Error updating project: " + error.message);
        });
    } else {
      // Create new project
      await axios
        .post(
          `http://127.0.0.1:8000/api/projects`,
          {
            project_title: title,
            project_type: type,
            project_description: description,
            project_start: startDate,
            project_end: endDate,
            budget: 0,
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
        )
        .then((response) => {
          toast.success("Project Created");

          const productOwnerId = response.data.data.productOnwer.id;
          const productManagerId = response.data.data.ProductManager.id;
          const projectID = response.data.data.id;
          const projectName = response.data.data.id;
          createChatGroup(
            projectID,
            projectName,
            productOwnerId,
            productManagerId
          );
          setOpen(false);
        })
        .catch((error) => {
          toast.error("Error Creating project: " + error.message);
        });
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

  return (
    <div className="container-fluid d-flex justify-content-center row">
      <Button
        className="mt-4 w-25 mb-5 addbtn"
        variant="outlined"
        color="neutral"
        sx={{ width: "95%", marginLeft: "30px", marginBottom: "5px" }}
        onClick={openHandleSave}
      >
        ADD Project
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
                  value={title}
                  onChange={handleTitleChange}
                  autoFocus
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Type Project</FormLabel>
                <Select
                  value={type}
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
                  value={startDate}
                  onChange={handleStartDateChange}
                  autoFocus
                  required
                  type="date"
                />
              </FormControl>
              <FormControl>
                <FormLabel>End</FormLabel>
                <Input
                  value={endDate}
                  onChange={handleEndDateChange}
                  autoFocus
                  required
                  type="date"
                />
              </FormControl>
              {/* <FormControl>
                <FormLabel>Budget</FormLabel>
                <Input
                  value={budget}
                  onChange={handleBudgetChange}
                  autoFocus
                  required
                  type="number"
                />
              </FormControl> */}
              <FormControl>
                <FormLabel>Description</FormLabel>
                <TextareaAutosize
                  minRows={3}
                  value={description}
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
          {Array.isArray(projects) ? (
            projects.map((item) => (
              <Col key={item.id} lg={5} md={5} sm={5}>
                <Card className="mb-4 cardData">
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
