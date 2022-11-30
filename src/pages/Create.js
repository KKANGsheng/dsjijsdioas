import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState,useReducer } from "react";



export default function Create() {

const initialState={
     name:"",
     quantity:"",
     amount:"",
}

function reducer(state,action){
    switch(action.type){
        case "update_input":
            return {
                ...state,
                [action.key]:action.value
            }
        default:
            return state
    }
}

const[state,dispatch]=useReducer(reducer,initialState)



  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      Validate
      autoComplete="off"
    >
       <TextField id="filled-basic" label="Name" variant="filled" value={state.value}/>
      <TextField id="filled-basic" label="Quantity" variant="filled" />
      <TextField id="filled-basic" label="Amount" variant="filled" />


      <Stack spacing={2} direction="row">

      <Button variant="contained">Submit</Button>
    </Stack>
    </Box>
  );
}