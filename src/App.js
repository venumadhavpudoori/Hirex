import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function App() {
  let [cards,setCards] = useState(false);
  const classes = useStyles();

  const getComponent=()=> setCards(true);
  return (
    <div className="App">
    <div className="container">
    <div className="row">
          <section id="home">
               <div className="col-md-offset-1 col-md-10 col-sm-12"> 
               <div>
               <Typography variant="h1" component="h2"  style={{fontWeight:'bold',fontSize:'52px',float:'left',margin:'20px 20px'}} gutterBottom>
               Hirex.ai
               </Typography> 
               </div> 
                <br/>     
               <TodoInput />
               <div className="row" style={{float:"left",margin:'20px 20px'}}>
               <Button
               variant="contained"
               size="large" 
               onClick={getComponent} className={classes.root}>Creat Cards</Button>
               </div> 
               <div style={{float:"left",margin:'70px 20px'}}>
               { cards ? <TodoList /> : null }
               </div>           
               </div>
          </section>
    </div>
    </div>
    </div>
  );
}

export default App;
