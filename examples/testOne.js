import React from 'react';
import ReactDOM from 'react-dom';
import Testone, { HoverHoc } from 'cr-avatar';
import '../assets/index.less';
// import HoverHoc from '../src/utils/HoverHoc';
import '../assets/example.less';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `
function handleRemove(e) {
  console.log('click remove----', e.target)
}

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
function SpanDemo(props) {
  return (
    <span>
      测试span tag {props.ishover}
    </span>
  )
}

const Hover = HoverHoc(Demo, {
  className: 'hoverBox',
})
const HoverSpan = HoverHoc(SpanDemo, {
  htmlTag: 'span'
})

function render(container) {
  ReactDOM.render(
    <div>
      <h2>RESCT COMPONENT TEMPLATE</h2>
      <Testone
        name={'刘亦菲'}
        color={'#647BFC'}
        mode={'line'}
        // mode={'head'}
        onRemove={handleRemove}
        // url='http://icon.qiantucdn.com/static/images/public/greenlogo.png'
        // remove={false}
        // disable={true}
      />
      <h2 style={{marginTop: 30}}>HOVER REACT COMPONENT</h2>
      <Hover hello='world' />
      <div>
        <HoverSpan /> 测试span hover 标签
      </div>
    </div>, container
  )
}

render(reactContainer)
