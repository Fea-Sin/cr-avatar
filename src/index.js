import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OuiDom from './utils/ouiDomUtils';

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

  setString = (str) => {
    if (str && typeof str === 'string') {
      let arr = str.split('')
      return arr && arr[0]
    }
    return '';
  }
  

  render () {
    const { prefixCls, name, color } = this.props
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
          { this.setString(name) }
        </div>
        <div 
          className={`${prefixCls}-name`}
          style={nameStyle}
        >
          {name}
        </div>
      </div>
    )
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  name: PropTypes.string,
  color: PropTypes.string,
}
Comp.defaultProps = {
  prefixCls: 'cr-app',
  color: '#647BFC';
}
export default Comp