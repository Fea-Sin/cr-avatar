import React from 'react';
import ReactDOM from 'react-dom';
import Testone from 'cr-avatar';
import '../assets/index.less';
import HoverHoc from '../src/utils/HoverHoc';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `
function handleRemove() {
  console.log('click remove')
}

function Demo(props) {
  return (
    <div style={{width: 300, height: 50, border: '1px solid green'}}>
      <span>demo</span><span style={{marginLeft: 10}}>{props.hello}</span>
      {
        props.isHover
        ? (<div>鼠标移入</div>)
        : (<div>鼠标移出</div>)
      }
    </div>
  )
}

const Hover = HoverHoc(Demo)

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
        url='http://icon.qiantucdn.com/static/images/public/greenlogo.png'
      />
      <h2 style={{marginTop: 30}}>HOVER REACT COMPONENT</h2>
      <Hover hello='world' />
    </div>, container
  )
}

render(reactContainer)