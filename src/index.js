import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OuiDom from './utils/ouiDomUtils';
import { version, Tooltip, Icon } from 'antd';
import 'antd/dist/antd.css';

class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  handleRemove = () => {
    const { onRemove } = this.props;
    if (onRemove && typeof onRemove === 'function') {
      onRemove()
    }
  }

  setString = (str) => {
    if (str && typeof str === 'string') {
      let arr = str.split('')
      return arr && arr[arr.length - 1]
    }
    return '';
  }
  

  render () {
    const { prefixCls, name, color, mode } = this.props
    const avaStyle = {
      backgroundColor: color,
    }
    const nameStyle = {
      color: color,
    }


    return (
      <div className={`${prefixCls}-con`}>
        <div 
          className={`${prefixCls}-ava`}
          style={avaStyle}
        >
          { mode === 'head'
            ? (<Tooltip title={name}>
                <span>{ this.setString(name) }</span>
               </Tooltip>)
            : (<span>{ this.setString(name) }</span>)
          }
          <div className={`${prefixCls}-ava-remove`} onClick={this.handleRemove}>
            <Icon type="close-circle" theme="filled" style={{ position: 'relative', top: '-5px' }} />
          </div>
        </div>
        { 
          mode === 'line'
          && (
            <div 
              className={`${prefixCls}-name`}
              style={nameStyle}
            >
              {name}
            </div>
          )
        }
      </div>
    )
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  name: PropTypes.string,
  color: PropTypes.string,
  mode: PropTypes.oneOf(['line', 'head']),
  onRemove: PropTypes.func,
}
Comp.defaultProps = {
  prefixCls: 'cr-app',
  color: '#647BFC',
}
export default Comp