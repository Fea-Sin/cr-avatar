import React, { PureComponent, Component } from 'react';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1336628_y9pe8scpi9.js'
});

function PIcon(props) {
  return <IconFont style={props.style} type={props.icon} />
}

export default PIcon;