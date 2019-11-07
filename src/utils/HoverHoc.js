import React, { Component, PureComponent } from 'react';

function HoverHoc(Wrap) {
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
      return (
        <div onMouseEnter={this.handleMouseEnter} isHover={this.state.isHover} onMouseLeave={this.handleMouseLeave}>
          <Wrap {...this.props} isHover={this.state.isHover} />
        </div>
      )
    }
  }
}

export default HoverHoc;