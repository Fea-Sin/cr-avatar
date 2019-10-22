import React from 'react';
import ReactDOM from 'react-dom';
import Testone from 'cr-avatar';
import '../assets/index.less';

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

function render(container) {
  ReactDOM.render(
    <div>
      <h2>RESCT COMPONENT TEMPLATE</h2>
      <Testone
        name={'刘亦菲'}
        color={'#647BFC'}
        // mode={'line'}
        mode={'head'}
        onRemove={handleRemove}
      />
    </div>, container
  )
}

render(reactContainer)