import React from 'react';
import { Button, TextField, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
    }
  }

  // 입력 값 유효성 검사
  checkValidate(){
    const { title, content, startDate, startTime, endDate, endTime } = this.state;
    // 시작일과 종료일이 같을 경우 종료 시간을 시작 시간 이전으로 지정하지 못하도록 변수 선언
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
    
    
    // if(!title || !content || !startDate || !startTime || !endDate || !endTime){
    //   return false
    // }
    // return true
  }

  saveTodoList() {
    if(this.checkValidate()){
      const { todoList, title, content, startDate, startTime, endDate, endTime } = this.state;
    todoList.push({title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime});
    this.setState({ 
      todoList,
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
    });
    }//else{
      //alert("입력값을 확인해 주세요.");
    //}
  }


  render() {
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField 
            label="제목" size="normal" margin="normal" fullWidth required 
            value={this.state.title}
            onChange={(e)=> {
                this.setState({title:e.target.value})
              }
            } 
          />
          <TextField 
            label="상세내용" size="normal" margin="normal" fullWidth multiline 
            value={this.state.content}
            onChange={(e)=> {
                this.setState({content:e.target.value})
              }
            }
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            value={this.state.startDate}
            onChange={(value)=> {
                this.setState({startDate:value})
              }
            } 
            style = {{width: '50%'}}     
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            value={this.state.startTime}
            onChange={(value)=> {
                this.setState({startTime:value})
              }
            }    
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
            value={this.state.endDate}
            onChange={(value)=> {
                this.setState({endDate:value})
              }
            } 
            style = {{width: '50%'}}     
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="종료시간"
            variant="inline"
            value={this.state.endTime}
            onChange={(value)=> {
                this.setState({endTime:value})
              }
            }    
            style = {{width: '50%'}}   
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{float:'right'}}
            onClick={()=>this.saveTodoList()}
          >
            Save
          </Button>
        </div>
        <div className="list_area">
        <List>
            {this.state.todoList.map((todoItem, idx) => {
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
    );
  }
  
}

export default App;