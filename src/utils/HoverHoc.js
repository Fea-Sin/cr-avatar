import React, { Component, PureComponent } from 'react';
import classNames from 'classnames';

function HoverHoc(Wrap, config) {
  let className, htmlTag;
  if (config) {
    className = config.className
    htmlTag = config.htmlTag
  }

  return class extends PureComponent {

    state = {
      isHover: 0
    }
    handleMouseEnter = () => {
      this.setState({
        isHover: 1
      })
    }
    handleMouseLeave = () => {
      this.setState({
        isHover: 0
      })
    }

    render() {
      const hoverCls = classNames(className)
      const style = {
        display: 'inline-block',
      }
      if (htmlTag === 'span') {
        return (
          <span
            onMouseEnter={this.handleMouseEnter} 
            ishover={this.state.isHover} 
            onMouseLeave={this.handleMouseLeave}
            style={style}
            className={hoverCls}
          >
            <Wrap {...this.props} ishover={this.state.isHover} />
          </span>
        )
      }

      return (
        <div 
          onMouseEnter={this.handleMouseEnter} 
          ishover={this.state.isHover} 
          onMouseLeave={this.handleMouseLeave}
          style={style}
          className={hoverCls}
        >
          <Wrap {...this.props} ishover={this.state.isHover} />
        </div>
      )
    }
  }
}

export default HoverHoc;