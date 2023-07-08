import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
// import jwt from 'jsonwebtoken';
import WebFont from "webfontloader";
import "../styles/userProfile.css";
import usersad from "../assets/images/user.png";
import ClientEditForm from "./EditUserProfile";

import { Column } from "primereact/column";

const UserProfile = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Font1",
          "Font2:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        ],
      },
    });
  }, []);

  // const name =localStorage.getItem("user_userName");
  const userId = localStorage.getItem("user_id");

  const [user, setUser] = useState(null);
  // get user
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/user/${userId}`)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data || 0);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  // get user projects
  const handleClose = () => {
    setShowEditForm(false);
    setSelectedclient(null);
  };

  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedclient, setSelectedclient] = useState(null);

  const handleEdit = () => {
    setShowEditForm(true);
  };

  const handleUpdate = (updatedUser) => {
    axios
      .put(`http://127.0.0.1:8000/api/user/${userId}`, updatedUser)
      .then((response) => {
        console.log(response.data);
        // Handle success response if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error response if needed
      });
  };

  return (
    <>
      {user ? (
        <div className="" style={{}}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="9" xl="10">
                <MDBCard>
                  <div
                    className="rounded-top text-white d-flex flex-row gradient-custom-2"
                    style={{ height: "200px" }}
                  >
                    <div
                      className="ms-4 mt-5 d-flex flex-column"
                      style={{ width: "150px" }}
                    >
                      <MDBCardImage
                        src={require(`../assets/images/${user.profilePic}`)}
                        alt="Generic placeholder image"
                        className="mt-4 mb-2 img-thumbnail"
                        fluid
                        style={{
                          width: "150px",
                          zIndex: "1",
                          borderRadius: "100px",
                        }}
                      />
                      <MDBBtn
                        outline
                        color="white"
                        style={{
                          height: "36px",
                          overflow: "visible",
                          backgroundColor: "black",
                          color: "#fff",
                        }}
                        onClick={handleEdit}
                      >
                        Edit profile
                        <i class="fa-solid fa-pen-to-square mx-1 "></i>
                      </MDBBtn>
                    </div>
                    <div className="ms-3" style={{ marginTop: "120px" }}>
                      <MDBTypography
                        tag="h5"
                        className="nameFont fs-1"
                        style={{ fontFamily: "Font1, Caprasimo" }}
                      >
                        {user["name"]}
                      </MDBTypography>
                      <MDBCardText>{user["email"]}</MDBCardText>
                    </div>
                  </div>
                  <div
                    className="p-4 text-black"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div className="d-flex justify-content-end text-center py-1">
                      <div>
                        <MDBCardText className="mb-1 h5">
                          <i class="fa-solid fa-heart fa-xl "></i>
                        </MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">
                          <i class="fa-solid fa-laptop-code fa-xl emoji"></i>
                        </MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">
                          <i class="fa-solid fa-face-smile fa-xl "></i>
                        </MDBCardText>
                      </div>
                    </div>
                  </div>
                  <MDBCardBody className="text-black p-4">
                    <div className="mb-5">
                      <p className="lead fw-normal mb-2">About</p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <MDBCardText className="font-italic mb-2">
                          <i class="fa-solid fa-user fa-lg"></i> User name :{" "}
                          {user["userName"]}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-2">
                          {user["gender"] == "female" ? (
                            <i class="fa-solid fa-venus fa-lg"></i>
                          ) : (
                            <i class="fa-solid fa-mars fa-lg"></i>
                          )}{" "}
                          Gender : {user["gender"]}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-2">
                          <i class="fa-solid fa-location-dot fa-lg"></i> Address
                          :{!user["address"] ? "empty field" : user["address"]}{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-2">
                          <i class="fa-solid fa-calendar fa-lg"></i> Goined date
                          :{user["joinedDate"]}{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-2">
                          <i class="fa-solid fa-flag fa-lg"></i> Country :{" "}
                          {!user["country"] ? "empty field" : user["address"]}{" "}
                        </MDBCardText>{" "}
                        <MDBCardText className="font-italic mb-2">
                          <i class="fa-solid fa-address-card fa-lg"></i>{" "}
                          National id :{" "}
                          {!user["nationalID"]
                            ? "empty field"
                            : user["nationalID"]}{" "}
                        </MDBCardText>{" "}
                        <MDBCardText className="font-italic mb-2">
                          <i class="fa-solid fa-phone fa-lg"></i> Phone :{" "}
                          {!user["phone"] ? "empty field" : user["phone"]}{" "}
                        </MDBCardText>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBCardText className="lead fw-normal mb-0">
                        Recent projects
                      </MDBCardText>
                      <MDBCardText className="mb-0">
                        <a href="#!" className="text-muted">
                          Show all
                        </a>
                      </MDBCardText>
                    </div>
                    {/* <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow> */}
                    {/* <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow> */}

                    {showEditForm && (
                      <ClientEditForm
                        user={user}
                        handleUpdate={handleUpdate}
                        handleClose={() => setShowEditForm(false)}
                      />
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default UserProfile;

// const UserProfile = () => {

//   return (
//     <div>
//       {user && (
//         <div>
//           {/* Render user information */}
//           <h2>{user.name}</h2>
//           <p>Email: {user.email}</p>
//           <p>National ID: {user.nationalID}</p>
//           <p>Address: {user.address}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Country: {user.country}</p>

//           {/* Button to open edit form */}

//           {/* Render edit form */}

//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
