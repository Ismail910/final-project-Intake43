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
import Editform from "./editform";
import UserForm from "./userform";

export default function Developer() {
  // const [employees, setEmployees] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [formData, setFormData] = useState({
    user: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      joinedDate: "",
      endDate: "",
      profilePic: "",
      country: "",
    },
  });
  const [employees, setemployees] = useState([]);
  const [selectedemployees, setSelectedemployees] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/employee")
      .then((response) => {
        console.log(response.data);
        setemployees(response.data.data || []);
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
      .post("http://127.0.0.1:8000/api/register/manager", {
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
      })
      .then((response) => {
        console.log(formData);
        setemployees([...employees, formData]);
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

  const handleDelete = (employeeId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/employee/${employeeId}`, {
        headers: {
          Authorization: "Bearer 4|ozrUF8REUT2pKW3EKAI8qzeEIo3zSbF3DEnlrNbK",
        },
      })
      .then((response) => {
        console.log(response.data);
        setemployees(
          employees.filter((employee) => employee.id !== employeeId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (employee) => {
    // console.log(employee);
    setSelectedEmployee(employee);
    setShowEditForm(true);
  };

  const handleUpdate = (updatedEmployee) => {
    console.log(updatedEmployee);
    axios
      .put(
        `http://127.0.0.1:8000/api/user/${updatedEmployee.user.id}`,
        updatedEmployee.user,
        {
          headers: {
            Authorization: "Bearer 47|TeQrlI4SmHUN4rvJdxGZZx0eb9ryFBXmsNPNOHCY",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const updatedEmployees = employees.map((employee) => {
          if (employee.id === selectedEmployee.id) {
            employee.user = response.data.data;
          }
          return employee;
        });

        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(updatedEmployees);
        setemployees(updatedEmployees);
        setShowEditForm(false);
        setSelectedEmployee(null);
      })
      .catch((error) => {
        console.log("asdadadasdassdasdadas");

        console.error(error);
      });
  };

  const handleClose = () => {
    setShowEditForm(false);
    setSelectedEmployee(null);
  };
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
        <h4 className="m-0">employees</h4>
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
          <UserForm
            formData={formData.user}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <DataTable
            className="col-12"
            value={employees}
            paginator
            header={header}
            rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rowsPerPageOptions={[10, 25, 50]}
            dataKey="id"
            selectionMode="checkbox"
            selection={selectedemployees}
            onSelectionChange={(e) => setSelectedemployees(e.value)}
            filters={filters}
            filterDisplay="menu"
            globalFilterFields={[
              "user.name",
              "user.email",
              "user.skills.name",
              "user.country",
            ]}
            emptyMessage="No employees found."
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            <Column
              field="user.name"
              header="Name"
              sortable
              filter
              style={{ minWidth: "14rem" }}
            />
            <Column
              field="user.email"
              header="Email"
              sortable
              filter
              style={{ minWidth: "14rem" }}
            />
           <Column
              field="user.skills.name"
              header="Skills"
              sortable
              filter
              style={{ minWidth: "14rem" }}
              body={(rowData) =>
                rowData.user.skills.map((skill) => skill.name).join(", ")
              }
            />

            <Column
              field="user.country"
              header="Country"
              sortable
              filter
              style={{ minWidth: "14rem" }}
            />

            <Column
              headerStyle={{ width: "5rem", textAlign: "center" }}
              bodyStyle={{ textAlign: "center", overflow: "visible" }}
              header="Actions"
              body={(rowData) => {
                return (
                  <div style={{ display: "flex" }}>
                    <button
                      className="btn btn-info me-2"
                      onClick={() => handleEdit(rowData)}
                    >
                      Edit
                    </button>
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
          {showEditForm && (
            <Editform
              employee={selectedEmployee}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}