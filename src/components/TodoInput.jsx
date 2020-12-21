import React, { useState, Fragment } from 'react';
import { addTodo } from "../redux/actions";
import {v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
      background: '#212121',
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

function TodoInput(props) {
    let [name, setName] = useState();
    let [value, setValue] = useState();
    let dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Fragment>
        <section className="section"> 
        <div className="container" style={{margin:"70px 10px"}}> 
           <div  style={{display:"flex",justifyContent: "space-between",padding:"10px"}}>
               <TextField 
               label="Name"
               variant="outlined"
               size="small" 
               onChange={(e) => setName(e.target.value)}
               value={name} 
               className="form-control mr-2"
               />
               <TextField 
               label="Value"
               variant="outlined"
               size="small" 
               onChange={(e) => setValue(e.target.value)}
               value={value}
               className="form-control mr-2"
               />
               <IconButton 
               variant="outlined"
               color="secondary"
               size="small"  
               aria-label="add an alarm"
               onClick={()=>setName(" ") || setValue(" ") } >
               <CancelIcon fontSize="large" />
               </IconButton>             
            </div>
            <div style={{display:"flex",justifyContent: "flex-end",padding:"10px"}}>
               <Button 
               variant="contained"
               size="medium" 
               onClick={()=>{
                dispatch(addTodo(
                   {
                       id: uuid(),
                       name:name,
                       value:value
                   }    
                      )
            
                )} }
               className={classes.root}>
                Add Row
               </Button>
            </div>
        </div>
        </section>
        </Fragment>
    );
}

export default TodoInput;