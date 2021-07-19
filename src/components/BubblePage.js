import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { prependOnceListener } from "process";
import Color from "./Color";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService()
    .then(res => {
      setColors(res.data);
    })
    .catch(err => console.log(err))
  }, []);
  console.log(colors);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    setColors(...colors, editColor);
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
    .delete(`/color/${colors.id}`)
    .then(res => {
      console.log(res)
      // props.setColors(props.colors.filter(color => color(color.id) !=== color(res.data)))
    })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
