import React, {PureComponent} from 'react';

const withActiveState = (Component) => {

  class WithActiveState extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {isActive: false};
      this._handleActiveStateChange = this._handleActiveStateChange.bind(this);
    }

    _handleActiveStateChange() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          onActiveStateChange={this._handleActiveStateChange}
        />
      );
    }
  }

  return WithActiveState;
};

export default withActiveState;
