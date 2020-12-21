import React, { useState,Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
      background: '#90a4ae',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px #eceff1',
      color: 'white',
      height: 'auto',
      padding: '0 30px',
    },
    edits: {
        color: 'white'
      },
  });

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    const [value, setValue] = useState(todo.value);
    const classes = useStyles();
    let dispatch = useDispatch();
    return (
        <div>   
            <div className="row align-items-center">
            <Fragment>
                <div className="col mb-3">
                <div className={classes.root} >  
                <div className="tile is-child box">
                <div className="row">
                <div>     
                { editable ? 
                <input 
                type='text' 
                className='form-control' 
                value={name}
                onChange={(e) => setName(e.target.value)} /> :  <h4>{todo.name}</h4> } 
                { editable ? 
                <input 
                type='text' 
                className='form-control' 
                value={value}
                onChange={(e) => setValue(e.target.value)} /> :  <h4>{todo.value}</h4>  }
                </div>
                <h5 style={{padding:"5px 20px"}}>ID : {todo.id.slice(0,8)}</h5>        
                </div> 
                </div>

                <IconButton 
               variant="outlined"
               color="dark"
               aria-label="add an alarm"
               onClick={() => {
                console.log("update");
                dispatch(updateTodo(
                    {
                        ...todo,
                        name:name,
                        value:value
                    }
                ))
                if(editable){
                    setName(todo.name);
                    setValue(todo.value);
                }
                 setEditable(!editable); 
                 
               }}
               className="m-2" >
               {editable ? <SaveIcon className={classes.edits}/> : <EditIcon onClick={()=>setName(" ") || setValue(" ") } className={classes.edits} /> }
               </IconButton>

               <IconButton 
               variant="outlined"
               color="dark"
               aria-label="add an alarm"
               onClick={() => dispatch(deleteTodo(todo.id))}
               className="m-2" >
               <CancelPresentationIcon className={classes.edits} />
               </IconButton>               
            </div>
            </div>
            </Fragment>
            </div>
        </div>     
    
    );
}

export default TodoItem;