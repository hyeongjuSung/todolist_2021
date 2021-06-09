# 0608
> ListArea 수정
```js
function ListArea(props) {
    return <div className="list_area">
    <List>
        {props.list.map((todoItem, idx) => {
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
}
...
<ListArea list={todoList}/>
```
> DatePicker 수정
```js
const DateTimePicker = (props) => {
    return <>
    <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label={props.dateLabel}
            value={props.date}
            onChange={(value)=> props.changeDate(value)}
            style = {{width: '50%'}}     
            KeyboardButtonProps={{
            'aria-label': 'change date',
            }}
        />
        <KeyboardTimePicker
            margin="normal"
            label={props.timeLabel}
            variant="inline"
            value={props.time}
            onChange={(value)=> props.changeTime(value)}
            style = {{width: '50%'}}   
            KeyboardButtonProps={{
            'aria-label': 'change time',
            }}
        />

    </>
}
...
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

```
> newApp.js의 가독성을 위한 코드 분리
```
1. components 폴더 생성
2. InputArea => InputArea.js에 코드 분리
3. DateTimePicker => DateTimePicker.js에서 코드 분리
4. ListArea => ListArea.js에 코드 분리
```
# 0602
> Components and Props
- 참고: https://ko.reactjs.org/docs/components-and-props.html
> 함수 컴포넌트
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
> 클래스 컴포넌트
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
> Hook
- 참고: https://ko.reactjs.org/docs/hooks-intro.html
```js
-  Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용 가능

import React, { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

# 0526 
> 날짜 및 시간 값 선택 시 텍스트에 값 삽입하기
```js
value={this.state.startDate}
onChange={(value)=> {
        this.setState({startDate:value})
    }
}
```
> Save icon 추가
```js
import SaveIcon from '@material-ui/icons/Save';
```
> 입력 값 유효성 검사
```js
checkValidate(){
    const {
      title, content, startDate, startTime, endDate, endTime
    } = this.state;
    if(!title || !content || !startDate || !startTime || !endDate || !endTime){
      return false
    }
    return true
  }
```
> 제목, 내용 공백 제거
```js
todoList.push({title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime});
```
# 0512
> material.ui 연결
```js
import { Button, TextField, Typography } from '@material-ui/core';
```
> datetime picker 설정
```js
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
```
> index.js 수정
```js
- index.js의 import "moment/locale/ko"을 통해 언어 변경

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import "moment/locale/ko";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiPickersUtilsProvider>,
  
  document.getElementById('root')
);
```
<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
