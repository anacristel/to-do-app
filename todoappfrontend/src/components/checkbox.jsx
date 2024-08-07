import React, { Fragment } from "react";
import "../";
import IconButton from "@mui/material/IconButton";
import { MdDelete } from "react-icons/md";
import { deleteTAsk } from "../api";

const Checkbox = (props) => {
  const { fetchData } = props;

  const {
    onChange,
    data: { id, description, done },
  } = props;

  const handleDelete = async () => {
    try {
      await deleteTAsk(id);
      await fetchData()
    } catch (error) {

    }
  }

  return (
    <Fragment>
      <label className="tarea">
        <input
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div>{description}</div>
        <IconButton edge="end" aria-label="comments" onClick={handleDelete}>
          <MdDelete />
        </IconButton>
      </label>
    </Fragment>
  );
};

export default Checkbox;
