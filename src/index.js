import React from 'react';

const ToHoc = (Component) => {
  return (Wrapped) => {
    class GeneratedHOC extends React.Component {
      render() {
        return (
          <Component render={args => <Wrapped {...this.props} {...args} /> } />
        );
      }
    }
  }
}

export default ToHoc;

