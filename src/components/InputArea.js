import React, {useState} from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DateTimePicker from './DateTimePicker'

const InputArea = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isError, setIsError] = useState(false);
    const {todoList, setTodoList} = props;

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

    return <>
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
        <DateTimePicker
            dateLabel="시작 예정일"
            date={startDate}
            timeLabel="시작시간"
            time={startTime}
            changeDate={setStartDate}
            changeTime={setStartTime}
        />
        <DateTimePicker
            dateLabel="종료 예정일"
            date={endDate}
            timeLabel="종료시간"
            time={endTime}
            changeDate={setEndDate}
            changeTime={setEndTime}
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
    </>
}

export default InputArea