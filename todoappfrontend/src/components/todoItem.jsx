import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "./checkbox";
import { Grid } from "@mui/material";

const TodoItem = (props) => {
  const { list, setList, fetchData } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const chk = list.map((item) => (
    <Checkbox fetchData={fetchData} key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <Grid display={"flex"} flexDirection={"column"}>
      <List sx={{ padding: 3 }}>
        {list.length ? chk : "¡¡ Yupi !! No hay ninguna tarea por hacer"}
        {list.length ? (
          <ListItem
          ></ListItem>
        ) : null}
      </List>
    </Grid>
  );
};
export default TodoItem;
