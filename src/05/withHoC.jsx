import React from "react";

export default function withHoc(WrappedComponent) {
  const { displayName, name } = WrappedComponent;
  const wrappedComponentName = displayName || name;

  return class WithHoc extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
