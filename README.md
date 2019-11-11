## cr-avatar

A react component about custom avatar

## view
[HoverHoc]('./HoverHoc.md')

## Installation
```
cnpm install --save cr-avatar
or
npm install --save cr-avatar
```

## Usage

```jsx
import React, { PureComponent } from 'react';
import Avatar from 'cr-avatar';
import 'cr-avatar/assets/index.css';

class App extends PureComponent {

  handleRemove = () => {
    console.log('删除回调')
  }

  render() {
    return (
      <Avatar
        name='刘亦菲'
        color='#647BFC'
        mode='line'
        onRemove={this.handleRemove}       
      />
    )
  }
}
```

## API
name | type | description
-----|------|------------
name | string| 名称
color | string | 颜色
mode | string | 组件模式（行内模式: 'line'; 头像模式: 'head'）
url | string | 头像URL
onRemove| function | 点击删除回调

## Development
```
git clone https://github.com/Fea-Sin/cr-avatar.git

cnpm install

npm start
```

## Example

http://localhost:8018/examples/testOne.html

## Test
  ```js
  npm test
  
  npm run coverage
  ```



## License

cr-comp is released under the MIT license.
