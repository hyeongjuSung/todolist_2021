import React, {useState, useEffect} from 'react';
import { Button, TextField, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';

function NewApp(props) {
    const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isError, setIsError] = useState(false);

    const checkValidate = () => {
        const sd = new Date(startDate);
        const ed = new Date(endDate);

        if(!title){
        alert('제목을 입력하세요.')
        return false;
        }else if(!content){
        alert('내용을 입력하세요.')
        return false;
        }else if(!startDate){
        alert('시작 예정일을 입력하세요.')
        return false;
        }else if(!startTime){
        alert('시작 시간을 입력하세요.')
        return false;
        }else if(!endDate){
        alert('종료 예정일을 입력하세요.')
        return false;
        }else if(!endTime){
        alert('종료 시간을 입력하세요.')
        return false;
        }else if(startDate>endDate){
        alert('시작 예정일은 종료 예정일 이후로 지정할 수 없습니다.')
        return false;
        }else if(sd.valueOf()===ed.valueOf()){
        if(startTime>endTime){
            alert('시작 시간은 종료 시간 이후로 지정할 수 없습니다.')
            return false;
        }
        alert('데이터가 추가되었습니다.')
        return true;
        }else if(title && content && startDate && startTime && endDate &&endTime){
        alert('데이터가 추가되었습니다.')
        return true;
        }
    }

    const saveTodoList = () => {
        if(checkValidate()){     
            setTodoList([...todoList, {title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime}]);
        }
    }

    return <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
        <TextField 
            label="제목" size="normal" margin="normal" fullWidth required 
            value={title}
            onChange={(e)=> setTitle(e.target.value)} 
        />
        <TextField 
            label="상세내용" size="normal" margin="normal" fullWidth multiline 
            value={content}
            onChange={(e)=> setContent(e.target.value)} 
        />
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            value={startDate}
            onChange={(value)=> setStartDate(value)}
            style = {{width: '50%'}}     
            KeyboardButtonProps={{
            'aria-label': 'change date',
            }}
        />
        <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            value={startTime}
            onChange={(value)=> setStartTime(value)}
            style = {{width: '50%'}}   
            KeyboardButtonProps={{
            'aria-label': 'change time',
            }}
        />
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="종료 예정일"
            value={endDate}
            onChange={(value)=> setEndDate(value)}  
            style = {{width: '50%'}}     
            KeyboardButtonProps={{
            'aria-label': 'change date',
            }}
        />
        <KeyboardTimePicker
            margin="normal"
            label="종료시간"
            variant="inline"
            value={endTime}
            onChange={(value)=> setEndTime(value)}
            style = {{width: '50%'}}   
            KeyboardButtonProps={{
            'aria-label': 'change time',
            }}
        />
        <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{float:'right'}}
            onClick={()=>saveTodoList()}
        >
            Save
        </Button>
        </div>
        <div className="list_area">
        <List>
            {todoList.map((todoItem, idx) => {
            const {
                title, content, startDate, startTime, endDate, endTime
            } = todoItem;
            return (
                <ListItem key={idx} role={undefined} dense button>
                <ListItemText
                    primary={title}
                    secondary={startDate.format('yyyy-MM-DD')+' '+startTime.format('HH:MM')+' ~ '+endDate.format('yyyy-MM-DD')+' '+endTime.format('HH:MM')}
                />
                </ListItem>
            )
            })}
        </List>
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © 성형주 '+new Date().getFullYear()+'.'}         
        </Typography>
  </div>
}

export default NewApp