import React from "react";
import UserOrdersMap from "./components/UserOrdersMap";

const UserOrdersContainer = () => {
  //Aqui se consumira el servicio para el usuario
  return (
    <>
      <section className="user_orders_header">
        <h1>My Orders</h1>
      </section>
      <section className="order">
      <UserOrdersMap me={14} />

      </section>
    </>
  );
};

export default UserOrdersContainer;
