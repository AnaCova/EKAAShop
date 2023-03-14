import React from "react";
import { User } from "./user_info";
import Container from "react-bootstrap/Container";
import BasicUserInfo from "./BasicUserInfo";


const UserProfile = () => {
  const data = User;
  return (
    <Container fluid className="user_profile_container">
      <section className="profile_header">
        <label className="welcome_label">Welcome {data.name} </label>
        <label className="admin_label">Admin</label>
      </section>
      <section>
        <BasicUserInfo/>
      </section>


    </Container>
  );
};

export default UserProfile;
