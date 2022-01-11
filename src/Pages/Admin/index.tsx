import React from "react";
import { Admin, Resource, AuthProvider } from "react-admin";
import restProvider from "ra-data-json-server";

// --------------------- list of pages ------------------
// import { UserList } from "./AdminComponent/UserList";
import { About } from "./AdminComponent/About";
// import { authProvider } from "./Auth/authProvider";
// ------------------------------------------------------

const dataProvider = restProvider("https://jsonplaceholder.typicode.com");

const AdminPage: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍"
        list={About}
      />
    </Admin>
  );
};

export default AdminPage;
