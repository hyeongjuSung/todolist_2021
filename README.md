#0526 
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
#0512
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
# Getting Started with Create React App

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
