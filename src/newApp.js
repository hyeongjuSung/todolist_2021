import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import InputArea from './components/InputArea';
import ListArea from './components/ListArea';
//import {addCounter} from './utils'
import './App.css';

function NewApp(props) {
    const [todoList, setTodoList] = useState([]); 
    return <div className="App">
        <div className="header">TODO LIST</div>
        <InputArea todoList={todoList} setTodoList={setTodoList} />
        <ListArea todoList={todoList}/>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © 성형주 '+new Date().getFullYear()+'.'}         
        </Typography>
  </div>
}

export default NewApp