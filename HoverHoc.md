## HoverHoc
React component for element hover <br />
The component key is input children props.ishover

## Installation
```
cnpm install --save cr-avatar
or
npm install --save cr-avatar
```

## usage
```jsx
import React, { PureComponent } from 'react';
import { HoverHoc } from 'cr-avatar';

function Demo(props) {
  return (
    <div style={{width: 300, height: 50, border: '1px solid green'}}>
      <span>demo</span><span style={{marginLeft: 10}}>{props.hello}</span>
      {
        props.ishover
        ? (<div>鼠标移入</div>)
        : (<div>鼠标移出</div>)
      }
    </div>
  )
}

const Hover = HoverHoc(Demo, {
  className: 'hoverBox',
})

class App extends PureComponent {

  render() {
    return (
      <div>
        <Hover />
      </div>
    )
  }
}

```

## API
name | type | description
-----|------|----------------
config | object | 初始化hover组件传参，{ className: 传入className; htmlTag: 'span'(行内使用方式) }