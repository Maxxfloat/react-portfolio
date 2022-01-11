import React from "react";

import { List, Datagrid, TextField, NumberField } from "react-admin";

export const About: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField label={"user ID"} source="userId" />
        <NumberField label={"id"} source="id" />
        <TextField
          label={"just for fucking test 'i'm not angry"}
          source="title"
        />
        <TextField label={"body"} source="body" />
      </Datagrid>
    </List>
  );
};
