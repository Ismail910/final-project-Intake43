import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { ProgressBar } from "primereact/progressbar";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Slider } from "primereact/slider";
import { Tag } from "primereact/tag";
import axios from "axios";
import DeveloperEditForm from "./editForms/developerEditform";
import UserForm from "./userform";
import skillEditForm from "./editForms/skillEditform";
import { toast } from "react-toastify";

export default function Adminskill() {
  // const [skills, setskills] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedskill, setSelectedskill] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    joinedDate: "",
    endDate: "",
    profilePic: "",
    country: "",
  });
  const [skills, setskills] = useState([]);
  const [selectedskills, setSelectedskills] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/skill")
      .then((response) => {
        console.log(response.data);
        if(response.status=== 200)
        {
        setskills(response.data.data || []);
        toast.success("skills fectched successfully");
        }
        else{
          toast.error("failed to load the data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      user: {
        ...formData.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    console.log(formData);
    await axios
      .post(
        "http://127.0.0.1:8000/api/skill",
        {
          name: formData.user.name,
          email: formData.user.email,
          password: formData.user.password,
          phone: formData.user.phone,
          nationalID: formData.user.nationalID,
          address: formData.user.address,
          joinedDate: formData.user.joinedDate,
          endDate: formData.user.endDate,
          country: formData.user.country,
          role: formData.user.role,
          userName: formData.user.userName,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "user_access_token"
            )}`,
          },
        }
      )
      .then((response) => {
        console.log(formData);
        setskills([...skills, formData]);
        setFormData({
          user: {
            name: "",
            email: "",
            password: "",
            phone: "",
            nationalID: "",
            address: "",
            joinedDate: "",
            endDate: "",
            profilePic: "",
            country: "",
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (skillId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/skill/${skillId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_access_token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setskills(
          skills.filter((skill) => skill.id !== skillId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (skill) => {
    // console.log(skill);
    setSelectedskill(skill);
    setShowEditForm(true);
  };

  const handleUpdate = (updatedskill) => {
    console.log(updatedskill);
    axios
      .put(
        `http://127.0.0.1:8000/api/skill/${updatedskill.id}`,
        {
          project_id: updatedskill.project.id,
          product_manager_id: updatedskill.productManager.id,
          skill_title: updatedskill.name,
          skill_description: updatedskill.description,
          skill_start: updatedskill.start,
          skill_end: updatedskill.end,
          status: updatedskill.status,
          assigned_to: updatedskill.assigned_to.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "user_access_token"
            )}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);

        const updatedskills = skills.map((skill) => {
          if (skill.id === selectedskill.id) {
            skill = response.data.data;
          }
          return skill;
        });

        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(updatedskills);
        setskills(updatedskills);
        setShowEditForm(false);
        setSelectedskill(null);
        // handleClose();
      })
      .catch((error) => {
        console.log("asdadadasdassdasdadas");
        console.error(error);
      });
  };

  // const handleClose = () => {
  //   setShowEditForm(false);
  //   setSelectedskill(null);
  // };
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
        <h4 className="m-0">skills</h4>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="w-100 overflow-hidden">
      <div className="row">
        <div className="col-2"></div>
        <div className="d-flex flex-column justify-content-center col-10 p-4 h-100">
          <DataTable
            className="col-12"
            value={skills}
            paginator
            header={header}
            rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rowsPerPageOptions={[10, 25, 50]}
            dataKey="id"
            selectionMode="checkbox"
            selection={selectedskills}
            onSelectionChange={(e) => setSelectedskills(e.value)}
            filters={filters}
            filterDisplay="menu"
            globalFilterFields={[
              "user.name",
              "user.email",
              "user.phone",
              "user.country",
            ]}
            emptyMessage="No skills found."
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column
              field="name"
              header="skill Name"
              sortable
              filter
              style={{ minWidth: "14rem" }}
            />

            <Column
              field="project.name"
              header="Project Name"
              sortable
              filter
              style={{ minWidth: "14rem" }}
            />

            <Column
              field="start"
              header="Start Date"
              sortable
              filter
              style={{ minWidth: "14rem" }}
            />
            <Column
              field="end"
              header="End Date"
              sortable
              filter
              style={{ minWidth: "14rem" }}
              // body={(rowData) =>
              //   rowData.user.skills.map((skill) => skill.name).join(", ")
              // }
            />
            <Column
              field="status"
              header="Status"
              sortable
              filter
              style={{ minWidth: "14rem" }}
              // body={(rowData) =>
              //   rowData.user.skills.map((skill) => skill.name).join(", ")
              // }
            />

            <Column
              headerStyle={{ width: "5rem", textAlign: "center" }}
              bodyStyle={{ textAlign: "center", overflow: "visible" }}
              header="Actions"
              body={(rowData) => {
                setSelectedskill(rowData);
                return (
                  <div style={{ display: "flex" }}>
                    {/* <button
                      className="btn btn-info me-2"
                      onClick={() => handleEdit(rowData)}
                    >
                      Edit
                    </button> */}

                    <skillEditForm
                      skill={rowData}
                      handleUpdate={handleUpdate}
                    />

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(rowData.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              }}
            />
          </DataTable>
          {/* {showEditForm && (
            <DeveloperEditForm
              skill={selectedskill}
              handleUpdate={handleUpdate}
              // handleClose={handleClose}
            />
          )} */}
        </div>
      </div>
    </div>
  );
}
